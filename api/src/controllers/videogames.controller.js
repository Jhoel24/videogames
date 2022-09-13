const { getVideogamesApiDb, getVideogameApiId } = require("../helpers")
const { Videogame, Genre } = require('../db')
const { validate } = require('uuid')

const getVideogames = async (req, res) => {
    const { name } = req.query
    const videogames = await getVideogamesApiDb()
    try {
        if(!name) return res.status(200).json(videogames)
        const videogamesFiltered = videogames.filter(vgame => vgame.name.toLowerCase().includes(name.toLowerCase()))
        videogamesFiltered.length ? res.status(200).json(videogamesFiltered) : res.status(404).json({ msg: 'Not found' })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
}

const getVideogamesById = async (req, res) => {
    const { id } = req.params
    // const videogames = await getVideogamesApiDb()
    // const existVideogame = videogames.find(vgame => vgame.id == id)

    // if(!existVideogame) return res.status(404).json({
    //     msg: 'Videogame not found'
    // }) 
    if(validate(id)){
        const videogameDB = await Videogame.findByPk(id, {
            include: {
                model: Genre,
                attributes: ['name'],
            }
        })
        return res.status(202).json(videogameDB)
    }
    const videoGameApi = await getVideogameApiId(id)
    return res.status(202).json(videoGameApi)
}

const createVideogame = async (req, res) => {
    const { name, description, launchDate, rating, platforms, genres } = req.body
    try {
        const existGame = await Videogame.findOne({
            where: {
                name
            }
        })

        if(existGame) return res.status(400).json({ msg: 'Videogame already exists' })

        const newVideogame = await Videogame.create({
            name,
            description,
            launchDate,
            rating,
            platforms
        })

        for(const id of genres){
            const genre = await Genre.findByPk(id)
            newVideogame.addGenre(genre)
        }

        res.status(201).json(newVideogame)
        
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}


module.exports = {
    getVideogames,
    getVideogamesById,
    createVideogame
}