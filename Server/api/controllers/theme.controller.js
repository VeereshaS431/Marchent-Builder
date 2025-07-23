const themes = require("../models/Theme.model");

const createTheme = async (req, res) => {
  console.log(req.body, "response form theme controller");

  try {
    const { themeName } = req.body;
    if (!themeName) {
      return res.status(400).json({ message: "Theme name is required." });
    }
    const theme = await themes.create({ themeName });
    console.log(theme, "theme from response");
    return res
      .status(201)
      .json({ message: "Theme created sucessfully", data: theme });
  } catch (error) {
    console.log(error, "error creating theme");
    res.status(500).json({ message: "Error creating theme" });
  }
};

module.exports = {
  createTheme,
};
