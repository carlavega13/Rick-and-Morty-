import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  ORDER_CARDS,
  FILTER_CARDS,
} from "./actionstype";

//? ESTADO INICIAL
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

//?      REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ?     ADD FAVORTIE
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
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
      return;

    //?       ORDER CARDS
    case ORDER_CARDS:
      return;

    default:
      return { ...state };
  }
};

export default reducer;
