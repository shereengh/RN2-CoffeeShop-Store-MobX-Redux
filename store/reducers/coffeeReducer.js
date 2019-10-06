import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COFFEESHOPS:
      const coffeeShops = payload;
      return {
        ...state,
        coffeeShops: coffeeShops,
        loading: false
      };
    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
