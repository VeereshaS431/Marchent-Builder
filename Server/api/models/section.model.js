const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const sections = sequelize.define("sections", {
  sectionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sectionCode: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  themeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
module.exports = sections;
