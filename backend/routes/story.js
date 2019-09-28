const express = require('express')
const router = express.Router()
const Story = require('../models/Story')

// This grabs all the stories
router.get('/', (req, res) => {
  Story.find({}, (err, stories) => {
    if (err) {
      res.status(500).send({ 'success': false, msg: 'Problem accessing database' })
    }

    res.send(stories)
  })
})

// This writes a story to the database
router.post('/', (req, res) => {
  let now = Date()
  let newStory = new Story({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    date: now,
    city: req.body.city,
    state: req.body.state,
    content: req.body.content,
  })

  newStory.save((err) => {
    if (err) {
      console.log(err)
      res.status(422).json({ 'success': false, msg: 'Could not save into database' })
    } else {
      res.send({ 'success': true })
    }
  })
})

module.exports = router
