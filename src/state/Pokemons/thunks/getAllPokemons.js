import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { POKEMONS } from './actions'

import { getAllPokemons, getSeveralIds } from "@/api/pokemons";

export const getPokemons = createAsyncThunk(POKEMONS.GET_ALL, async (arg) => {
    const { data: { count, results, next, previous } } = await getAllPokemons();
    const response = await getSeveralIds(results);
    return {
        count,
        result: response.map(pokemon => pokemon.data),
        next, 
        previous
    };
})

export const getPokemonsExtraReducer = (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
        state.home.status = "pending";
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload: { count, result, next, previous } }) => {
        state.home.status = "full";
        state.home.list = result;
        state.home.next = next;
        state.home.previous = previous;
        state.home.pokemonCount = count;
    });
    builder.addCase(getPokemons.rejected, (state) => {
        state.home.status = "rejected";
    })
}