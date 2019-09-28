const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan")
const app = express();
const path = require("path")

// Import Routes
const stories = require("./routes/story")

// These are the required information to open up the database
const REQUIRED_ENVS = ["MONGODB_URI", "SECRET"];

// Checks if the environment varibles are there
REQUIRED_ENVS.forEach(function (el) {
    if (!process.env[el]) throw new Error("Missing required env var " + el);
});
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("open", () => console.log(`Connected to MongoDB!`));
mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
});

// Just some middle ware :)
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Pass through routes
app.use("/", stories)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
    return res.send({ "success": true });
})