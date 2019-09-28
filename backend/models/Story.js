const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var storySchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
