const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//errorHandler
const { errorHandler } = require('./middleware/errorMiddleware')


//create server and app
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.listen(port, () =>console.log(`server started on port ${port}`))

//endpoints
app.use('/api/movies',require('./routes/moviesRoutes'))
app.use('/api/actors',require('./routes/actorsRoutes'))

//using errorHandler
app.use(errorHandler)


//connect to db
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()
