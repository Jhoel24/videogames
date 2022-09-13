import { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from '../styles/Nav.module.css'
import SearchBar from './SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { cleanVideogameDetail } from '../actions'

const Nav = () => {

    const params = useLocation()
    const dispatch = useDispatch()
    const { videogameSelected: game } = useSelector(state => state)

    const marker = useRef()
    const home = useRef()
    const videogame = useRef()
    const about = useRef()

    const indicator = e => {
        marker.current.style.left = e.offsetLeft+"px"
        marker.current.style.width = e.offsetWidth+"px"
    }

    useEffect(() => {
        if(params.pathname === '/home'){
            marker.current.style.left = "0px"
            marker.current.style.width = "51px"
        } else if(params.pathname === '/home/create'){
            marker.current.style.left = "87px"
            marker.current.style.width = "152px"
        } else if(params.pathname === '/home/about'){
            marker.current.style.left = "267px"
            marker.current.style.width = "51px"
        }
    }, [params.pathname])

    const handleClick = e => {
        if(Object.keys(game).length){
            dispatch(cleanVideogameDetail())
        }
        indicator(e.target)
    }

    console.log('Me renderice')

    return (
        <header>
            <div className={style.logo}>
                <p>Videogames <span>App</span></p>
            </div>
            <nav className={style.navbar}>
                <div className='marker' ref={marker} ></div>
                <Link to="/home" ref={home} onClick={handleClick} >Home</Link>
                <Link to="/home/create" ref={videogame} onClick={handleClick} >Create videogame</Link>
                <Link to="/home/about" ref={about} onClick={handleClick} >About</Link>
            </nav>
            <SearchBar />
        </header>
    )
}

export default Nav