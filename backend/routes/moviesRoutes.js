
const express = require('express')
const router = express.Router()

const { getMovies,postMovie,updateMovie,deleteMovie } = require('../controllers/movieController')

router.get('/', getMovies) // GET method route
router.post('/', postMovie) // POST method route
router.put('/:id', updateMovie) // PUT method route
router.delete('/:id', deleteMovie) // DELETE method route

module.exports = router