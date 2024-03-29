const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

// The dotenv module loads all environment variables from the file '.env' to the global object process.env
//  It's just a little more convenient than settings vars all the time.
dotenv.config()

// These are the required information to open up the database
const REQUIRED_ENVS = [
  'MONGODB_URI',
  'PORT',
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

const http = require('http').createServer(app)
const io = require('socket.io')(http)

// Log data using Morgan
app.use(logger('dev'))

// Parse incoming http requests for json or urlencodings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.options('*', cors());

// Import the router from the routes folder
const router = require('./routes')
app.use(router)


io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})

const port = process.env.PORT || 5000

// Start the app listening
http.listen(port, () => console.log(`Example app listening on port ${port}!`))
