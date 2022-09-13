import { Routes, Route } from 'react-router-dom'
import Form from '../components/Form'
import VideogameDetail from '../components/VideogameDetail'
import Layout from '../layout/Layout'
import About from '../pages/About'
import Home from '../pages/Home'

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="create" element={<Form />} />  
                <Route path="videogame/:id" element={<VideogameDetail />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes