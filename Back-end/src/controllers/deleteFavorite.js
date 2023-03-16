let baseDatos = require("../utils/fav");
const deleteFavorite = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("An id is required");
  }
  let favsFiltered = baseDatos.filter((char) => char.id != id);
  console.log("favs", favsFiltered);
  if (favsFiltered.length !== baseDatos.length) {
    baseDatos = [];
    baseDatos = favsFiltered;

    console.log("base datos", baseDatos);
    return res.status(200).json(baseDatos);
  } else {
    return res
      .status(400)
      .send("The character with that id is not a favorite ");
  }
};
// module.exports = deleteFavorite;
