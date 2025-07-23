const sequelize = require("../../config/database");
const sections = require("./section.model");
const themes = require("./Theme.model");
const Users = require("./user");
const db = {
  sequelize,
  Users,
  themes,
  sections,
};

module.exports = db;
