const asyncHandler = require('express-async-handler')
const Actor = require('../models/actorModel')

// GET method route
const getActors = asyncHandler(async (req, res) => {
    const actors = await Actor.find()
    res.status(200).json(actors)
})

// POST method route
const postActor = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please provide an actor or actors names')
    }
    
    const actors = await Actor.create({
        name: req.body.name
    })
    res.status(201).json({actors, message: 'created Actor'})
})

// PUT method route
const updateActor = asyncHandler (async(req, res) => {
    const actor = await Actor.findById(req.params.id)
    
    if(!Actor){
        res.status(400)
        throw new Error('Actor not found')
    }

    const updateActor = await Actor.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updateActor)
})

// DELETE method route
const deleteActor = asyncHandler(async (req, res) => {
    const actor = await Actor.findById(req.params.id)
    
    if(!Actor){
        res.status(400)
        throw new Error('Actor not found')
    }

    await actor.remove()

    res.status(200).json({id: req.params.id, message: 'Actor deleted'})
})

module.exports = {
    getActors,
    postActor,
    updateActor,
    deleteActor
}