import { useRef, useState } from "react"
import { TableOfContents } from "lucide-react"
import {CircleX } from "lucide-react"
import Maincontent from "./Maincontent"

function Sidebar(){
    const sidebarRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const isBeingResizedRef = useRef<boolean>(false)

    const [isBeingReset, setIsBeingReset] = useState(false)
    const [isBeingCollapsed, setIsBeingCollapsed] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    
    const onDragResize = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        
        isBeingResizedRef.current = true
        document.addEventListener("mousemove", onMouseDrag)
        document.addEventListener("mouseup", onMouseRelease)
    }
    
    const onMouseDrag = (event: MouseEvent) => {
        if(!isBeingResizedRef.current || isCollapsed) return
        
        let newWidth = event.clientX
        if (newWidth < 240) newWidth = 240
        if (newWidth > 480) newWidth = 480
        
        if (sidebarRef.current && contentRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`
            contentRef.current.style.width = `calc(100% - ${newWidth}px)`
        }        
    }
    
    const onMouseRelease = () => {
        isBeingResizedRef.current = false
        document.removeEventListener("mousemove", onMouseDrag)
        document.removeEventListener("mouseup", onMouseRelease)
    }

    const onResetWidth = () => {
        if (sidebarRef.current && contentRef.current) {
            setIsBeingReset(true)
            setIsCollapsed(false)

            sidebarRef.current.style.width = "240px"
            // contentRef.current.style.width = "240px"
        }
        setTimeout(() => setIsBeingReset(false), 500)

    }

    const onCollapse = () => {
        if (sidebarRef.current && contentRef.current) {
            setIsBeingCollapsed(true)
            setIsCollapsed(true)

            sidebarRef.current.style.width = "50px"
            contentRef.current.style.width = "100%"
            // contentRef.current.style.marginLeft = "50px"
        }
        setTimeout(() => setIsBeingCollapsed(false), 500)
    }
    
    return (
        <>
        <div className="flex">
            <div 
                ref={sidebarRef}
                className={`${
                    (isBeingReset || isBeingCollapsed) && "transition-all duration-500 ease-out"
                }
                flex flex-col gap-4 overflow-y-scroll relative shadow  bg-slate-200 p-4 z-10 w-[240px] group/sidebar `}
            >
                <div className="flex justify-between">
                    <button onClick={onResetWidth} className="">
                        <TableOfContents />
                    </button>
                    <button 
                        onClick={onCollapse} 
                        className="opacity-0 transition-all group-hover/sidebar:opacity-100"
                    >
                        <CircleX className={`${isCollapsed && "hidden"} hover:cursor-pointer`}/>
                    </button>
                </div>
                <div
                    onMouseDown={onDragResize} 
                    className="absolute top-0 right-0 cursor-ew-resize w-[4px] bg-slate-300 opacity-0 group-hover/sidebar:opacity-100 transition-all h-full"
                ></div>
                <div className={`${isCollapsed && "hidden"} flex flex-col gap-4 items-center mt-6`}>
                    <a className="hover:underline" href="#">Overview</a>
                    <a className="hover:underline" href="#">Transactions</a>
                    <a className="hover:underline" href="#">Category</a>
                    <a href="#">...</a>
                </div>
            </div>
            
            {/* main content */}
            <Maincontent ref={contentRef}/>

        </div>
        </>
    )
    
}

export default Sidebar