import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import { logActions } from './middlewares';
import { pokemonSlice } from "./Pokemons";

export let reducer = combineReducers({
    [pokemonSlice.name]: pokemonSlice.reducer
})

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logActions),
    devTools: true
})


export const dispatcher = (action) => {
    return store.dispatch(action)
}

export type RootState = ReturnType<typeof reducer>