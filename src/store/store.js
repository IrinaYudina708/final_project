import {combineReducers, createStore, applyMiddleware}  from "redux";
import categoriesReducer from "./category/reducer";
import itemsReducer from "./items/reducer";
import { thunk } from 'redux-thunk'
import { trackUserActivityMiddleware } from "./middleware";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, trackUserActivityMiddleware));
export default store;