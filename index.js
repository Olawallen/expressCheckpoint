
const express = require('express');

const app = express()

const port = 9250

app.get('/', (request, response) => {
    response.status(200)
    response.send('welcome to homepage')
})

// introducing routes to server
const userRouter = require('./routes/users')

// introducing products routes to server
const productRouter = require('./routes/products')

// using user routes
app.use(userRouter)

// using product routes
app.use(productRouter)

app.listen(port, () => console.log(`server started successfully`))