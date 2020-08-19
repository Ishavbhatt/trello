import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducer/index";

let createthunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

const store = createStore(Reducer, applyMiddleware(createthunk));
export default store;
