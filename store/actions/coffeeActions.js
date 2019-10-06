import axios from "axios";
import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./types";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;
      console.log(shops);
      dispatch({
        type: GET_COFFEESHOPS,
        payload: shops
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return async dispatch => {
    try {
      dispatch({
        type: COFFEESHOPS_LOADING
      });
    } catch (error) {
      console.error(error);
    }
  };
};
