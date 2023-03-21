import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  ORDER_CARDS,
  FILTER_CARDS,
  SHOW_SIDE_BAR,
  ADD_CHARACTER,
  DELETE_ALL,
  DELETE_CHARACTER,
} from "./actionstype";

//? ESTADO INICIAL
const initialState = {
  myFavorites: [],
  allFavoritesCopy: [],
  sideBar: false,
  characters: [],
};

//?      REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ?     ADD FAVORTIE
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allFavoritesCopy: [...state.myFavorites, action.payload],
      };

    //?         DELETE FAVORITE
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    //?        FILTER CARDS
    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: state.allFavoritesCopy.filter(
          (fav) => fav.gender === action.payload
        ),
      };

    //?       ORDER CARDS
    case ORDER_CARDS:
      const sort = state.allFavoritesCopy.sort((a, b) => a.id - b.id);
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: sort,
        };
      } else {
        return {
          ...state,
          myFavorites: sort.reverse(),
        };
      }

    //? MOSTRAR SIDE BAR
    case SHOW_SIDE_BAR:
      if (action.payload) {
        return {
          ...state,
          sideBar: true,
        };
      } else {
        return {
          ...state,
          sideBar: false,
        };
      }
    //? ADD CHARACTER
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    //? DELETE CHARACTER
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (char) => char.id !== action.payload
        ),
      };
    case DELETE_ALL:
      return {
        ...state,
        characters: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
