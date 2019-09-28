const express = require('express')
const router = express.Router()
const Story = require('../models/Story')
const geocoder = require('../facades/geocoder')

// This grabs all the stories
router.get('/', (req, res) => {
  console.log("Hello");
  Story.find({}, (err, stories) => {
    if (err) {
      res.status(500).send({ 'success': false, msg: 'Problem accessing database' })
    }

    res.json(stories)
  })
})

// This writes a story to the database
router.post('/', (req, res) => {
  geocoder.geocode(`${req.body.city}, ${req.body.state}`, (err, geocodeResult) => {
    if (err) {
      res.status(500).json({ success: false, msg: 'Geocoder failed' })
    }

    console.log(err, geocodeResult)

    let latitude = null
    let longitude = null

    if (geocodeResult.length > 0) {
      latitude = geocodeResult[0].latitude
      longitude = geocodeResult[0].longitude
    }

    let now = Date()
    let newStory = new Story({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      date: now,
      city: req.body.city,
      state: req.body.state,
      content: req.body.content,
      latitude,
      longitude,
    })

    newStory.save((err) => {
      if (err) {
        console.log(err)
        res.status(422).json({ 'success': false, msg: 'Could not save into database' })
      } else {
        res.json({ 'success': true })
      }
    })
  })
})

module.exports = router
