import { createStore, combineReducers } from "redux";
import { productReducer } from "../D-Reducer/productReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({ productReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
