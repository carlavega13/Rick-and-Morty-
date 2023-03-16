let baseDatos = require("../utils/fav");
const postFavorite = (req, res) => {
  const character = req.body;
  //? SI MI  FAVORITO YA EXISTE RETORNO ERROR
  baseDatos.forEach((fav) => {
    if (fav.id == character.id) {
      return res.status(400).send("This character is already a favorite");
    }
  });
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
    res.status("404").send("Cant create, must complete every input");
  }
};

// module.exports = postFavorite;
