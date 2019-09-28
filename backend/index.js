const express = require("express");
const app = express();

const bodyParser = require("body-parser")

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    console.log(req.body)
    return res.send({ "success": true });
})


app.post("/twilio-webhook", (req, res) => {
    console.log(req.body)
    return res.send({ "success": true });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
