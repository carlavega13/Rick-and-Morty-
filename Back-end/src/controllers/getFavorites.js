const getFavorites = (req, res) => {
  let baseDatos = require("../utils/fav");
  if (baseDatos.length === 0) {
    res.status("404").send("You dont have any favorites");
  }
  res.status(200).json(baseDatos);
};
// module.exports = getFavorites;
