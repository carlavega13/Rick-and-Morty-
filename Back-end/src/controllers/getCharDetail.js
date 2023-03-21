const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios.get(URL + id).then(
    (response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
        origin: response.data.origin?.name,
        status: response.data.status,
      };
      return res.status(200).json(character);
    },
    (err) => {
      return res.status(500).send(err.message);
    }
  );
};

module.exports = getCharDetail;
