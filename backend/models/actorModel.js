
const mongoose = require('mongoose')

const actorSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please add an actor/actress name']
    }
})

module.exports = mongoose.model('Actor', actorSchema)