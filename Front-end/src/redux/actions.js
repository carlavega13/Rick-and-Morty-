import {
  DELETE_FAVORITE,
  ADD_FAVORITE,
  FILTER_CARDS,
  ORDER_CARDS,
  SHOW_SIDE_BAR,
  ADD_CHARACTER,
  DELETE_ALL,
  DELETE_CHARACTER,
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

// !MOSTRAR SIDE BAR
export const showSideBar = (boolean) => {
  return { type: SHOW_SIDE_BAR, payload: boolean };
};

//! ADD CHARACTER
export const addCharacter = (character) => {
  return { type: ADD_CHARACTER, payload: character };
};

//! DELETE CHARACTER
export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};

//! DELETE ALL
export const delelteAll = () => {
  return { type: DELETE_ALL };
};
