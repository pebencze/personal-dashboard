import { useRef } from "react"


function Sidebar(){
    const sidebarRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const isBeingResizedRef = useRef<boolean>(false)

    
    const onDragResize = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        
        isBeingResizedRef.current = true
        document.addEventListener("mousemove", onMouseDrag)
        document.addEventListener("mouseup", onMouseRelease)
    }
    
    const onMouseDrag = (event: MouseEvent) => {
        if(!isBeingResizedRef.current) return
        
        let newWidth = event.clientX
        if (newWidth < 240) newWidth = 240
        if (newWidth > 480) newWidth = 480
        
        if (sidebarRef.current && contentRef.current) {
            // modify styles if both sidebar and content exist
            sidebarRef.current.style.width = `${newWidth}px`
            contentRef.current.style.width = `${newWidth}px`
            // contentRef.current.style.width = `calc(100% - ${newWidth}px)`
            
        }        
    }
    
    const onMouseRelease = () => {
        isBeingResizedRef.current = false
        document.removeEventListener("mousemove", onMouseDrag)
        document.removeEventListener("mouseup", onMouseRelease)
    }
    
    return (
        <>
            <div 
                ref={sidebarRef}
                className="flex flex-col gap-4 overflow-y-scroll relative border-r bg-slate-100 p-4 z-10 w-[240px] group/sidebar"
            >
                <button  
                    className="opacity-0 transition-all group-hover/sidebar:opacity-100"
                >
                    Collapse
                </button>
                <div
                    onMouseDown={onDragResize} 
                    className="absolute top-0 right-0 cursor-ew-resize w-[2px] bg-slate-200 opacity-0 group-hover/sidebar:opacity-100 transition-all h-full"
                ></div>
            </div>
            <button className="">
                Expand
            </button>
            {/* main content */}
            <div ref={contentRef} className="flex flex-col gap-4 overflow-y-scroll border-r bg-slate-100 p-4 z-10 w-[240px] h-screen">
                <p>Page 1</p>
                <p>Page 2</p>
                <p>Page 3</p>
                <p>Page 4</p>
            </div>
        </>
    )
    
}

export default Sidebar