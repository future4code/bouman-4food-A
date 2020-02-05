import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurants from './restaurants'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurants
    // Outros reducers aqui
  });
