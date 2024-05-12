const defaultState = {
  filter: "По умолчанию",
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FILTER_FILMS":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
