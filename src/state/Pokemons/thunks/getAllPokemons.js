import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { POKEMONS } from './actions'

import { getAllPokemons, getSeveralIds } from "@/api/pokemons";

export const getPokemons = createAsyncThunk(POKEMONS.GET_ALL, async () => {
    const { data: { results } } = await getAllPokemons();
    const response = await getSeveralIds(results);
    return response.map(pokemon => pokemon.data);
})

export const getPokemonsExtraReducer = (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
        state.home.status = "pending";
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
        state.home.status = "full";
        state.home.list = payload;
    });

    builder.addCase(getPokemons.rejected, (state) => {
        state.home.status = "rejected";
    })
}