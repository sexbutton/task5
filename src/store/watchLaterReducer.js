const defaultState = {
  watchLater: [],
};

const watchLaterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "WATCH_LATER_FILM":
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload], // Добавляем id лайкнутого фильма в массив
      };
    case "UNWATCH_LATER_FILM":
      return {
        ...state,
        watchLater: state.watchLater.filter((id) => id !== action.payload), // Удаляем id лайкнутого фильма из массива
      };
    default:
      return state;
  }
};

export default watchLaterReducer;
