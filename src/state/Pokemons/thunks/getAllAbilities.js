import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { ABILITIES } from './actions'

import { getAllAbilities , getSeveralAbiliesIDs} from "@/api/pokemons";

export const getAbilities = createAsyncThunk(ABILITIES.GET_ALL, async (arg) => {
    const { data: { results } } = await getAllAbilities();
    const response = await getSeveralAbiliesIDs(results);
    return response.map(ability => ability.data);
})

export const getAbilitiesExtraReducer = (builder) => {
    builder.addCase(getAbilities.pending, (state) => {
        state.abilities.status = "pending";
    });
    builder.addCase(getAbilities.fulfilled, (state, { payload }) => {
        state.abilities.status = "full";
        state.abilities.list = payload;
    });
    builder.addCase(getAbilities.rejected, (state) => {
        state.abilities.status = "rejected";
    })
}