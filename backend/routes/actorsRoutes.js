
const express = require('express')
const router = express.Router()

const { getActors,postActor,updateActor,deleteActor } = require('../controllers/actorController')

router.get('/', getActors) // GET method route
router.post('/', postActor) // POST method route
router.put('/:id', updateActor) // PUT method route
router.delete('/:id', deleteActor) // DELETE method route

module.exports = router