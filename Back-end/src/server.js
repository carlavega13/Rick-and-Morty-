const express = require("express");
const server = express();
const routerCards = require("./routes/routerCards");
const routerDetail = require("./routes/routerDetail");
const routerFav = require("./routes/routerFav");

//? EL SERVIDOR ESTA ESCUCHANDO LEVANTADO
server.listen(3001);
//? MIDDLEWARES

//! MIDDLEWARE PARA AUTORIZAR SOLO A MI FRONT A HACER PETICIONES
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //Autorizo recibir solicitudes de
  next();
});
server.use(express.json());

//!  RUTA CARDS
server.use("/rickandmorty", routerCards);
//!  RUTA DETAIL
server.use("/rickandmorty/detail", routerDetail);
//!  RUTA FAV
server.use("/rickandmorty/fav", routerFav);
