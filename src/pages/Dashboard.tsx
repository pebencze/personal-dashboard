
import React, { useRef, useState } from "react"
import Sidebar from "../components/Sidebar"
import Maincontent from "../components/Maincontent"

function Dashboard(){
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
        <div className="flex">
            <Sidebar ref={sidebarRef} isBeingReset={isBeingReset} isBeingCollapsed={isBeingCollapsed} isCollapsed={isCollapsed} onResetWidth={onResetWidth} onCollapse={onCollapse} onDragResize={onDragResize}/>
            <Routes >
                <Maincontent ref={contentRef}/>

            </Routes>
        </div>
    )
}

export default Dashboard