const bodyParser = require('body-parser')
const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes')

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
