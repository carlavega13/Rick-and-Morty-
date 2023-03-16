// let baseDatos = [3];
let baseDatos = require("../utils/fav");

const postFavorite = (req, res) => {
  const character = req.body;
  //? SI MI  FAVORITO YA EXISTE RETORNO ERROR
  baseDatos.forEach((fav) => {
    if (fav.id == character.id) {
      return res.status(400).send("This character is already a favorite");
    }
  });
  console.log("me pase por el ogt tu condicional");
  if (
    character.id &&
    character.name &&
    character.species &&
    character.image &&
    character.gender
  ) {
    baseDatos.push(character);
    res.status(201).send(baseDatos);
  } else {
    res.status(404).send("Cant create, must complete every input");
  }
};

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
const getFavorites = (req, res) => {
  if (baseDatos.length === 0) {
    res.status(404).send("You dont have any favorites");
  }
  res.status(200).json(baseDatos);
};

module.exports = { postFavorite, getFavorites, deleteFavorite };
