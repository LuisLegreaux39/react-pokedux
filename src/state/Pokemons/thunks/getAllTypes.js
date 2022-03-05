import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { TYPES } from './actions'

import { getTypes } from "@/api/pokemons";

export const getAllTypes = createAsyncThunk(TYPES.GET_ALL, async (arg) => {
    const { data: { results } } = await getTypes()
    return results;
})

export const getAllTypesExtraReducer = (builder) => {
    builder.addCase(getAllTypes.pending, (state) => {
        state.types.status = "pending";
    });
    builder.addCase(getAllTypes.fulfilled, (state, { payload }) => {
        state.types.status = "full";
        state.types.list = payload;
    });

    builder.addCase(getAllTypes.rejected, (state) => {
        state.types.status = "rejected";
    })
}