import { TableOfContents } from "lucide-react"
import {CircleX } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"


interface SideBarProps{
    isBeingReset: boolean;
    isBeingCollapsed: boolean;
    isCollapsed: boolean;
    onResetWidth: () => void;
    onCollapse: () => void;
    onDragResize: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Sidebar = React.forwardRef<HTMLDivElement, SideBarProps>(({isBeingReset, isBeingCollapsed, isCollapsed, onResetWidth, onCollapse, onDragResize}, ref) => {
    return (
        <div 
            ref={ref}
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
                <Link className="hover:underline" to="/">Overview</Link>
                <Link className="hover:underline" to="/transactions">Transactions</Link>
                <Link className="hover:underline" to="/category-breakdown">Category Breakdown</Link>
                <Link to="#">...</Link>
            </div>
        </div>        
    )   
})

export default Sidebar