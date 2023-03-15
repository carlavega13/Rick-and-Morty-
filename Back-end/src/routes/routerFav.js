const { Router } = require("express");
const routerFav = Router();
const getFacvorites = require("../controllers/getFavorites");
const postFavorite = require("../controllers/postFavorite");
const deleteFavorite = require("../controllers/deleteFavorite");
routerFav.get("/", getFacvorites);
routerFav.post("/", postFavorite);
routerFav.delete("/:id", deleteFavorite);
module.exports = routerFav;
