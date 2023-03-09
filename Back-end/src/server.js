const http = require("http");
const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("rickandmorty/characters")) {
      let id = req.url.split("/").at(-1);

      let character = characters.find(
        (character) => character.id === Number(id)
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    }
  })
  .listen(3001, "localhost");
