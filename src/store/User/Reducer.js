const Reducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, user: action.data };
    default:
      throw new Error();
  }
};

export default Reducer;
