const { getGenresApi } = require("../helpers")
const { Genre } = require('../db')

const getGenres = async (req, res) => {
    const genres = await getGenresApi()
    try {
        for(const genre of genres){
            await Genre.findOrCreate({
                where: {
                    name: genre.name
                }
            })
        }
        const genresDB = await Genre.findAll({
            attributes: ['id', 'name']
        })
        res.status(200).json(genresDB)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    getGenres
}