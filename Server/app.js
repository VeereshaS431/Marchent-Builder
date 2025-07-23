require("dotenv").config();
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const defineAssociations = require("./api/init_models/associations");
const db = require("./api/models/index");
const Port = process.env.PORT || 5000;
corsOpts = {
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOpts))
app.use(bodyParser.json())
defineAssociations(db)
app.get("/", (req, res) => {
    try {
        res.send("welcome to the user APIs")
    }
    catch (err) {
        console.log(err)
    }
})


app.listen(Port, () => {
    try {
        console.log(`server is running on http://localhost:${Port}`)
    }
    catch (err) {
        console.log(err, "form app")
    }
})