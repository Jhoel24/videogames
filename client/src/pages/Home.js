import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from '../actions'
import Card from '../components/Card'
import style from '../styles/Home.module.css'

const Home = () => {

    const videogamesPerPage = 15

    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        if(!videogames.length){
            dispatch(getVideogames())
        }
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        setItems([...videogames].splice(0, videogamesPerPage))
    }, [videogames])

    const nextHandler = () => {
        const totalElements = videogames.length
        const nextPage = currentPage + 1
        const firstIndex = nextPage * videogamesPerPage
        if(firstIndex >= totalElements) return 
        setItems([...videogames].splice(firstIndex, videogamesPerPage))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1
        if(prevPage < 0) return
        const firstIndex = prevPage * videogamesPerPage
        setItems([...videogames].splice(firstIndex, videogamesPerPage))
        setCurrentPage(prevPage)
    }
    
    return (
        <div className='container margin-top'>
            { videogames.length ? 
                <>
                    <div className={style.cardsContainer}>
                        { items.map(vgame => (
                            <Card 
                                key={vgame.id}
                                { ...vgame }
                            />
                        )) }
                    </div>
                    { videogames.length > videogamesPerPage && (
                        <div className={style.buttons}>
                            { currentPage !== 0 && (
                                <button className={style.prev} onClick={() => prevHandler()} >Prev</button>
                            ) }
                            { items.length === videogamesPerPage && (
                                <button className={style.next} onClick={() => nextHandler()} >Next</button>
                            ) }
                        </div>
                    )}
                </>
             : 
                <p>Cargando...</p>
             }
        </div>
    )
}

export default Home