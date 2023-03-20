const { Router } = require("express");
const routerFav = Router();
// const getFacvorites = require("../controllers/getFavorites");
// const postFavorite = require("../controllers/postFavorite");
// const deleteFavorite = require("../controllers/deleteFavorite");
const {
  getFavorites,
  postFavorite,
  deleteFavorite,
} = require("../controllers/FavsControllers");
routerFav.delete("/:id", deleteFavorite);
module.exports = routerFav;
