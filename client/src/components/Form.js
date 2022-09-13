import { platformsData } from '../data/platforms'
import { useSelectOptions } from '../hooks/useSelect'
import style from '../styles/Form.module.css'

const testGenres = [
    { id: 1, name: 'RPG' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Adventure' }
]

const Form = () => {

    const [genres, SelectGenres] = useSelectOptions('Choose the genres', testGenres)
    const [platforms, SelectPlatforms] = useSelectOptions('Choose the platforms', platformsData)

    const handleSubmit = e => {
        e.preventDefault()
        console.log({genres, platforms})
    }

    return (
        <div className="container">
            <h1 className={style.title}>Create a videogame</h1>
            <div className={style.formContainer}>
                <form className={style.form} onSubmit={handleSubmit} >
                    <fieldset>
                        <legend>General information:</legend>
                        <label htmlFor="name" >Name: </label>
                        <input type="text" id="name" placeholder="Game name" />
                        <label htmlFor="description" >Description:</label>
                        <textarea 
                            id="description"
                        />
                        <SelectGenres />
                        <SelectPlatforms />
                    </fieldset>
                    <fieldset>
                        <legend>Extra information:</legend>
                        <label htmlFor="image" >Image: (Not obligatory)</label>
                        <input type="text" placeholder="Game image" id="image" />
                        <label>Rating:</label>
                        <input type="number" placeholder="Game rating" />
                        <label htmlFor="realeaseDate">Release date:</label>
                        <input type="date" />
                    </fieldset>
                    <input type="submit" value="Create" className={style.button} />
                </form>
            </div>
        </div>
    )
}

export default Form