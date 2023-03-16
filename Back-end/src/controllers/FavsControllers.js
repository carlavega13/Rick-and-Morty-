// let baseDatos = [3];
let baseDatos = require("../utils/fav");
//!     POST FAVORITE
const postFavorite = (req, res) => {
  const character = req.body;

  //?  FOUND VA A BUSCAR SI YA TENGO EL PERSONAJE CON MISMO ID
  const found = baseDatos.find((char) => char.id == character.id);
  //? SI FOUND TIENE ALGO ES PORQUE YA EXISTE UN CHARACTER CON ESE ID ENTONCES RETORNO ERROR
  if (found) {
    return res.status(404).send("ID invalid: The id has already been use");
  }
  //?  SI ME PASARON TOOODOS LOS CAMPOS PUSHEO MI NUEVO CHARACTER
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
    //? SI NO ME PASARON TODOS LOS CAMPOS RETORNO ERROR
    res.status(404).send("Cant create, must complete every input");
  }
};
//!     DELETE FAVORITE
const deleteFavorite = (req, res) => {
  //? SACO ID DE PARAMS
  const { id } = req.params;
  //?   SI NO ME PASARON ID RETORNO ERROR
  if (!id) {
    return res.status(400).send("An id is required");
  }
  //? CREO MI ARRAY YA FILTRADO POR EL ID QUE ME PASARON POR PARAMS
  let favsFiltered = baseDatos.filter((char) => char.id != id);
  //?  SI EL ARRAY FILTRADO Y LA BASE DE DATOS TIENEN DISTINTO LENGTH
  if (favsFiltered.length !== baseDatos.length) {
    //? PISO A MI BASE DE DATOS CON MI NUEVO ARRAY
    baseDatos = favsFiltered;
    //? RETORNO BASE DE DATOS
    return res.status(200).json(baseDatos);
  } else {
    //? SI EL ARRAY FILTRADO Y LA BASE DE DATOS TIENEN EL MISMO LENGTH RETORNO ERROR
    return res
      .status(400)
      .send("The character with that id is not a favorite ");
  }
};
//!     GET FAVORITE
const getFavorites = (req, res) => {
  //? SI NO TENGO NADA EN FAVORITOS RETORNO ERROR
  if (baseDatos.length === 0) {
    res.status(404).send("You dont have any favorites");
  }
  //? SI TENGO ALGO EN BASE DE DATOS LA RETORNO
  res.status(200).json(baseDatos);
};

module.exports = { postFavorite, getFavorites, deleteFavorite };
