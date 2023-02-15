const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

//creating Movie endpoints

const getMovies = asyncHandler(async (req,res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
})

const postMovie = asyncHandler(async (req,res) => {
    const {name, release_year, genre, actor, sinopsis} = req.body 
    if (!name || !release_year || !genre || !actor || !sinopsis) {
       res.status(400) 
       throw new Error('Please provide movie information') 
    }

    const movie = await Movie.create({
        name, 
        release_year, 
        genre,
        actor,
        sinopsis
    })

    res.status(201).json(movie) 

})


const updateMovie = asyncHandler(async  (req,res) => {
    const movie = await Movie.findById(req.params.id)
    
    if (!movie) {
        res.status(400)
        throw new Error('Movie not found')
    }

    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updateMovie)
})

const deleteMovie = asyncHandler(async (req,res) => {
    const movie = await Movie.findById(req.params.id)
    
    if (!movie) {
        res.status(400)
        throw new Error('Movie not found')
    }

    await movie.remove()
    res.status(200).json({id: req.params.id, message: 'Movie deleted'})
})

module.exports = {
    getMovies,
    postMovie,
    updateMovie,
    deleteMovie
}
