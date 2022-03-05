import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { MOVES } from './actions'

import { getMoves, getSeveralMoveDetails } from "@/api/pokemons";

export const getAllMoves = createAsyncThunk(MOVES.GET_ALL, async (arg) => {
    const { data: { results } } = await getMoves();
    const response = await getSeveralMoveDetails(results)
    console.log(response)
    return response.map(move => move.data);
})

export const getMovesExtraReducers = (builder) => {
    builder.addCase(getAllMoves.pending, (state) => {
        state.moves.status = "pending";
    });
    builder.addCase(getAllMoves.fulfilled, (state, { payload }) => {
        state.moves.list = payload;
        state.moves.status = "full";
    });

    builder.addCase(getAllMoves.rejected, (state) => {
        state.moves.status = "rejected";
    })
}