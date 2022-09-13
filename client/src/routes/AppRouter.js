import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import DashboardRoutes from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
