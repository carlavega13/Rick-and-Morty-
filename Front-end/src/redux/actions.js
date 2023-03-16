import {
  DELETE_FAVORITE,
  ADD_FAVORITE,
  FILTER_CARDS,
  ORDER_CARDS,
} from "./actionstype";
import axios from "axios";

export const addFavorite = (personaje) => {
  axios.post("http://localhost:3001/rickandmorty/fav", personaje);
  return { type: ADD_FAVORITE, payload: personaje };
};

export const deleteFavorite = (id) => {
  axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
  return { type: DELETE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};
