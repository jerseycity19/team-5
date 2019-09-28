const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var storySchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    numberOfLogins: {
        type: Number,
        required: true,
        default: 0
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
