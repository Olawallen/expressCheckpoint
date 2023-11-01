
const express = require('express')

const router = express.Router()

// get all products
router.get('/products', (request, response) => {
    response.status(200)
    response.send({
        name: 'iphone 15',
        price: '#900,000',
        ratings: 5,
        description: 'very slick design'
    }) 
})

// get a single product
router.get('/products/:id', (request, response) => {
    response.status(200)
    response.send({
        name: 'iphone 15',
        price: '#900,000',
        ratings: 5,
        description: 'very slick design'
    })
})

// add a new product
router.post('/products', (request, response) => {
    response.status(200)
    response.send({
        name: 'Samsung S9',
        price: '#750,000',
        ratings: 4,
        description: 'nice shape and lasting battery life'
    })
})

// update a user
router.put('/products/:id', (request, response) => {
    response.status(200)
    response.send({
        name: 'Samsung S8',
        price: '#750,000',
        ratings: 4,
        description: 'nice shape and lasting battery life'
    })
})

// delete a user 
router.delete('/products/:id',(request, response) => {
    response.status(200)
    response.send('product deleted')
})




module.exports = router