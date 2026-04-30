import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { POKEMONS } from './actions'

import { getAllPokemons } from "../../../api/pokemons";

export const getPokemons = createAsyncThunk(POKEMONS.GET_ALL, async (arg) => {
    try {
        const response = await getAllPokemons();
        if (!response) throw Error();
        const { count, next, previous, results } = response
        return {
            count,
            list: results,
            next,
            previous
        };
    } catch (error) {
        console.log(error)
    }
})

export const getPokemonsExtraReducer = (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
        state.home.status = "pending";
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload: { count, list, next, previous } }) => {
        // state.home.status = "fulfilled";
        state.home.list = list;
        state.home.next = next;
        state.home.previous = previous;
        state.home.pokemonCount = count;
    });
    builder.addCase(getPokemons.rejected, (state) => {
        state.home.status = "rejected";
    })
}