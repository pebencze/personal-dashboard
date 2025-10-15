
import React, { useRef, useState, useMemo } from "react"
import { Routes, Route } from "react-router-dom"
import Sidebar from "../Sidebar"
import Card from "../Card"
import TransactionsView from "../TransactionsView"
import CategoryBreakdown from "../CategoryBreakdownView"

function DashboardLayout(){
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
            <div ref={contentRef} className="p-4 w-screen bg-slate-100">
                <h1 className="text-3xl mb-4">Personal Finance Tracker</h1>
                <Routes >
                    <Route path="/" element={<Card title="Overview">Content here</Card>}></Route>
                    <Route path="/transactions" element={<TransactionsView />}></Route>
                    <Route path="/category-breakdown" element={<CategoryBreakdown />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashboardLayout