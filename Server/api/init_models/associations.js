const defineAssociations = (db) => {
  db.themes.hasMany(db.sections, { foreinKey: "themeId" });
  db.sections.belongsTo(db.themes, { foreinKey: "themeId" });
};

module.exports = defineAssociations;
