import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurants from '../reducers/restaurant'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurants
    // Outros reducers aqui
  });
