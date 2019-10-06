import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./reducers/cartReducer";
import coffeeReducer from "./reducers/coffeeReducer";

const middlewares = [thunk];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const rootReducer = combineReducers({
  rootCart: cartReducer,
  rootCoffee: coffeeReducer
});

const store = createStore(rootReducer, enhancer);

export default store;
