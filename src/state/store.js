import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import {  logActions } from './middlewares';
import pokemonSlice from "./Pokemons";

let reducer = combineReducers({
    [pokemonSlice.name]: pokemonSlice.reducer
})

const store = configureStore({
    reducer,
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logActions)
})


export const dispatcher = (action) => {
    return store.dispatch(action)
}
export default store;
