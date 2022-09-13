import './LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    
    return (
        <div className="container-loading">
          <div className="loader"></div>
          <h3>Welcome to <span>Videogames App</span></h3>
          <Link to="/home" className='home-link' >Home</Link>
        </div>
        
    )
}

export default LandingPage