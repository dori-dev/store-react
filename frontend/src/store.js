import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { thunk } from "redux-thunk";

import {
  productListReducer,
  productDetailReducer,
} from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

const cartItems = localStorage.getItem("cartItems");
const cartItemsFromLocalStorage = cartItems ? JSON.parse(cartItems) : [];

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
