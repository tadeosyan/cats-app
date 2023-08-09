import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//import catsReducer from "./cats/reducers";

const configureStore = () => {
  const reducers = combineReducers({
    //cats: catsReducer,
  });

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
