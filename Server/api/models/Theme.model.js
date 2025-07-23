const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const themes = sequelize.define("themes", {
  themeName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = themes;
