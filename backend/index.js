const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require("cors")

// The dotenv module loads all environment variables from the file '.env' to the global object process.env
//  It's just a little more convenient than settings vars all the time.
dotenv.config()

// These are the required information to open up the database
const REQUIRED_ENVS = [
    'MONGODB_URI',
    'SECRET'
]

// Verify all environment vaiables are present
REQUIRED_ENVS.forEach(function (el) {
    if (!process.env[el]) throw new Error('Missing required env var ' + el)
})
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('open', () => console.log(`Connected to MongoDB!`))
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err)
})

const app = express()

// Log data using Morgan
app.use(logger('dev'))

// Parse incoming http requests for json or urlencodings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Import the router from the routes folder
const router = require('./routes')
app.use(router)

// Start the app listening
let port = process.env.port || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
