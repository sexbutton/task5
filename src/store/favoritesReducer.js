const defaultState = {
  favorites: [],
};

const favoritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FAVORITE_FILM":
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Добавляем id лайкнутого фильма в массив
      };
    case "UNFAVORITE_FILM":
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload), // Удаляем id лайкнутого фильма из массива
      };
    default:
      return state;
  }
};

export default favoritesReducer;
