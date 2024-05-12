import { combineReducers, createStore } from "redux";
import filterReducer from "./filterReducer";
import sortReducer from "./sortReducer";
import watchLaterReducer from "./watchLaterReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  watchLater: watchLaterReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer);

export default store;
