const express = require("express");
const { createTheme } = require("../controllers/theme.controller");

const router = express.Router();

router.post("/create-theme", createTheme);

module.exports = router;
