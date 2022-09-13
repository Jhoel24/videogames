import { Link } from 'react-router-dom'
import style from '../styles/Card.module.css'

const Card = (props) => {

    
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={style.content}>
                <h2>{props.name}</h2>
                <p className={style.genres}>
                    Genres: { props?.genres.map((genre, i) => (
                        <span key={i} >{genre}{i !== (props.genres.length - 1) && ', '}</span>
                    )) } 
                </p>
                <div className={style.button}>
                    <Link to={`/home/videogame/${props.id}`} >Read more</Link>
                </div>
            </div>
        </div>  
    )
}

export default Card