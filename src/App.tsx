import { BrowserRouter } from 'react-router-dom'
import './App.css'
import DashboardLayout from './components/layout/DashboardLayout'
import { StrictMode } from 'react'

function App() {
 return (
    <StrictMode>
        <BrowserRouter>
            <DashboardLayout />
        </BrowserRouter>
    </StrictMode>
 )
}

export default App
