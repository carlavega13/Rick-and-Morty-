const { Router } = require("express");
const routerCards = Router();
const getCharByID = require("../controllers/getCharByID");

routerCards.get("/onsearch/:id", getCharByID);

module.exports = routerCards;
