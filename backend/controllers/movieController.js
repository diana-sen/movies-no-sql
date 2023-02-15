


//creating Movie endpoints

const getMovies = (req,res) => {
    res.status(200).json({message: 'Obtain Movies'})
}

const postMovie = (req,res) => {
    res.status(201).json({message: 'Created Movie'})
}

const updateMovie = (req,res) => {
    res.status(200).json({message:`Movie ${req.params.id} updated`})
}

const deleteMovie = (req,res) => {
    res.status(200).json({message:`Movie ${req.params.id} deleted`})
}


module.exports = {
    getMovies,
    postMovie,
    updateMovie,
    deleteMovie
}
