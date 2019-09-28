const express = require("express");
const router = express.Router();
const Story = require("../models/Story")

// This grabs all the stories
router.get("/allStories", (req, res) => {

})

// This writes a story to the database
router.post("/writeStory", (req, res) => {
    let now = Date();
    let newStory = new Story({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: now,
        city: req.body.city,
        state: req.body.state,
        content: req.body.content
    })

    newStory.save((err) => {
        if (err) {
            console.log(err);
            res.json({ "success": false, msg: "Could not save into database" })
        }
        else {
            res.json({ "success": true })
        }
    })
})

module.exports = router;