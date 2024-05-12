const defaultState = {
  sorting: "По умолчанию",
};

const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SORT_FILMS":
      return {
        ...state,
        sorting: action.payload,
      };

    default:
      return state;
  }
};

export default sortReducer;
