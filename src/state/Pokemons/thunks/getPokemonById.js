import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { POKEMONS } from './actions'

import { getPokemonIdDetails } from "@/api/pokemons";

export const getPokemon = createAsyncThunk(POKEMONS.GET_ID, async (id, { getState }) => {
    const { data } = await getPokemonIdDetails(id)
    return data
})

export const getPokemonExtraReducers = (builder) => {
    builder.addCase(getPokemon.pending, (state) => {
        state.details.status = "pending";
    });
    builder.addCase(getPokemon.fulfilled, (state, { payload }) => {
        state.details.status = "full";
        state.details.pokemon = payload;
    });

    builder.addCase(getPokemon.rejected, (state) => {
        state.details.status = "rejected";
    })
}