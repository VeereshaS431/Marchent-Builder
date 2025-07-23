require("dotenv").config();
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const sequelize = require("./config/database");
const app = express();
const defineAssociations = require("./api/init_models/associations");
const db = require("./api/models/index");
const Port = process.env.PORT || 5000;
corsOpts = {
  origin: "*",
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOpts));
app.use(bodyParser.json());
defineAssociations(db);

const theme = require("./api/routes/theme.routes");

app.get("/", (req, res) => {
  try {
    res.send("welcome to the user APIs");
  } catch (err) {
    console.log(err);
  }
});
app.use("/api/theme", theme);

sequelize.sync().then(() => {
    console.log("🟢 DB Synced");
    app.listen(Port, () => {
        console.log(`🚀 Server running at http://localhost:${Port}`);
    });
});
