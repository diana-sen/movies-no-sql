const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please type a movie name']
    },
    release_year: {
        type: Number,
        required: [true, 'Please type the release year'],
    },
    genre: {
        type: String,
        required: [true, 'Please type a genre']
    },
    actor: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please type the actors'],
        ref: 'Actor'
    }],
    sinopsis: {
        type: String,
        required: [true, 'Please type a sinopsis']
    }
}, {
    timestamps: true

})

module.exports = mongoose.model('Movie', movieSchema)
