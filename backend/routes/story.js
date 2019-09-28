const express = require("express");
const router = express.Router();
const Story = require("../models/Story")

// This grabs all the stories
router.get("/allStories", (req, res) => {

})

// This writes a story to the database
router.post("/writeStory", (req, res) => {
    let newStory = new Story({
        date: req.body.date,
        location: req.body.location,
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