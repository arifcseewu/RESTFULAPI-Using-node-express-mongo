const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

//Gettting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err){
        res.status(500).json({message:err.message})
    }
})

//Getting one
router.get('/:id', (req, res) => {
    
 })

//Creating one
router.post('/', async (req, res) => {
     const subscribers = new Subscriber({
         name: req.body.name,
         subscribedToChannel: req.body.subscribedToChannel
        })
        try {
            const newSubscriber = await subscribers.save()
            
            res.status(201).json(newSubscriber)
        } catch (err) {
            res.status(400).json({message: err.message})
        }
 })

 //Updating one
 router.patch('/', (req, res) => {
    res.send('update works')
 })

 //Deleting one
 router.delete('/:id', (req, res) => {
    res.send('delete works')
 })

module.exports = router