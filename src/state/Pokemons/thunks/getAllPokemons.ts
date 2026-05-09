import {
    createAsyncThunk
} from "@reduxjs/toolkit";

import { POKEMONS } from './actions'

import { getAllPokemons, getPokemonDetail, getPokemonSpecies } from "../../../api/pokemons";

export const getPokemons = createAsyncThunk(POKEMONS.GET_ALL, async (arg) => {
    try {
        const response = await getAllPokemons();
        if (!response) throw Error();
        const { count, next, previous, results } = response;
        const list = await Promise.all(
            results.map(async ({  url }) => {

                const pokemonDetails = await getPokemonDetail(url);
                if(!pokemonDetails) return undefined;
                const species = await getPokemonSpecies(`${pokemonDetails.id}`);
                return {
                    ...pokemonDetails,
                    species
                }
            })
        )
        return {
            count,
            list,
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
        state.home.status = "fulfilled";
        state.home.list = list;
        state.home.next = next;
        state.home.previous = previous;
        state.home.pokemonCount = count;
    });
    builder.addCase(getPokemons.rejected, (state) => {
        state.home.status = "rejected";
    })
}