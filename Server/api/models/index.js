const sequelize = require("../../config/database");
const Users = require("./user")
const db = {
    sequelize,
    Users
};

module.exports = db;