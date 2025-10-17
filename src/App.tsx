import { BrowserRouter } from 'react-router-dom'
import './App.css'
import DashboardLayout from './components/layout/DashboardLayout'

function App() {
 return (
    <BrowserRouter>
        <DashboardLayout />
    </BrowserRouter>
 )
}

export default App
