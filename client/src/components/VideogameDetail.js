import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { cleanVideogameDetail, getVideogameDetail } from '../actions'
import style from '../styles/VideogameDetail.module.css'
import { cleanParagraph } from '../helpers'

const VideogameDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { videogameSelected: game } = useSelector(state => state)

    console.log(game)

    useEffect(() => {
        dispatch(getVideogameDetail(id))
        //eslint-disable-next-line
    }, [])

    const handleBack = () => {
        dispatch(cleanVideogameDetail())
    }
    

    return (
        <div className='margin-top'>
            { Object.keys(game).length ? 
                <>
                    <Link to={'/home'} onClick={handleBack} className={style.buttonBack}>Back</Link>
                    <div className={style.generalContainer}>
                        <div className={style.gameContainer}>
                            <div className={style.imageContainer}>
                                <img src={game.image ? game.image : 'https://www.softzone.es/app/uploads-softzone.es/2020/03/Programaci%C3%B3n-Videojuegos.jpg'} alt={`${game.name}`} />
                            </div>
                            <div className={style.title}>
                                <h1>{game.name}</h1>
                            </div>
                            <div className={style.description}>
                                <p>{cleanParagraph(game.description)}</p>
                            </div>
                            <div className={style.genres}>
                                <h2>Genres</h2>
                                <ul>
                                    { game.genres.length && game.genres.map((genre, i) => (
                                        <li key={i} >{ !game.created ? genre : genre.name }</li>  
                                    )) }
                                </ul>
                            </div>
                            <div className={style.platforms}>
                                <h2>Platforms</h2>
                                <ul>
                                    { game.platforms.length && game.platforms.map((platform, i) => (
                                    <li key={i} >{platform}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={style.dateRating}>
                                <div className={style.date}>
                                    <h2>Release date: </h2>
                                    <p>{game.launchDate}</p>
                                </div>
                                <div className={style.rating}>
                                    <h2>Rating: </h2>
                                    <p>{game.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            : 
                <p>Loading ...ss</p>
            }
        </div>
    )
}

export default VideogameDetail