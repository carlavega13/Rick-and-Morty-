const { Router } = require("express");
const routerDetail = Router();
const getCharDetail = require("../controllers/getCharDetail");

routerDetail.get("/:id", getCharDetail);

module.exports = routerDetail;
