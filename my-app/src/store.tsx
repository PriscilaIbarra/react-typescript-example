import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import repositoriesReducer from "../src/repositories/reducers/repositoriesReducer";

const reducers = combineReducers({
    repositories : repositoriesReducer
})

export const store = createStore(reducers,{},applyMiddleware(thunk));