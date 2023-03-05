import {
  DELETE_FAVORITE,
  ADD_FAVORITE,
  FILTER_CARDS,
  ORDER_CARDS,
} from "./actionstype";

export const addFavorite = (personaje) => {
  return { type: ADD_FAVORITE, payload: personaje };
};

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};
