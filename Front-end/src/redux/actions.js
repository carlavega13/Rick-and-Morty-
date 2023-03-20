import {
  DELETE_FAVORITE,
  ADD_FAVORITE,
  FILTER_CARDS,
  ORDER_CARDS,
} from "./actionstype";
import axios from "axios";
// !AGREGAR FAVORITO
export const addFavorite = (personaje) => {
  axios.post("http://localhost:3001/rickandmorty/fav", personaje);
  return { type: ADD_FAVORITE, payload: personaje };
};

// !ELIMINAR FAVORITO
export const deleteFavorite = (id) => {
  axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
  return { type: DELETE_FAVORITE, payload: id };
};

// !FILTRAR FAVORITOS
export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

// !ORDENAR FAVORITOS
export const orderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};
