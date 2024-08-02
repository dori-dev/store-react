import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import { productListReducer } from "./reducer/productReducer";

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
