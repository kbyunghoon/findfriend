import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const { logger } = require("redux-logger");

let store = configureStore({
  reducer: rootReducer,
  middleware: [
    // ...getDefaultMiddleware(),
    thunk.withExtraArgument({ history: history }),
    logger,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;