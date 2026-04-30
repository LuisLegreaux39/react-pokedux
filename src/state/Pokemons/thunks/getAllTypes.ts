import {
    createAsyncThunk,
    ActionReducerMapBuilder,
    current
} from "@reduxjs/toolkit";

import { TYPES } from './actions'

import { getTypes } from "../../../api/pokemons";
import {pokemonSlice} from '../index'
import {PokemonType } from '../../../types/pokemonTypes'
import { getAllMoves } from './getMoves';

type PokemonSlice = typeof pokemonSlice

export const getAllTypes = createAsyncThunk(TYPES.GET_ALL, async (arg, { dispatch }) => {
    try {
        const response = await getTypes();
        if (!response) throw Error();
        const { previous, count, next, results } = response
        return results
    } catch (error) {
        console.log(error)
    }
})

export const getAllTypesExtraReducer = (builder) => {
    builder.addCase(getAllTypes.pending, (state) => {
        state.home.status = "pending";
        state.types.status = "pending";
    });
    builder.addCase(getAllTypes.fulfilled, (state, { payload }) => {
        console.log(
            current(state)
        )
        console.log(payload)
        state.home.status = "full";
        state.types.status = "full";
        state.types.list = payload;
    });

    builder.addCase(getAllTypes.rejected, (state) => {
        state.home.status = "rejected";
        state.types.status = "rejected";
    })
}