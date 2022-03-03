import {
    createSlice,
} from "@reduxjs/toolkit";

import { getPokemonsExtraReducer } from './thunks/getAllPokemons';
import { getPokemonExtraReducers } from './thunks/getPokemonById';

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        home:{
            list: [],
            status: null,
        },
        details:{
            pokemon:null,
            status: null,
        }
    },
    extraReducers: builder => {
        getPokemonsExtraReducer(builder),
        getPokemonExtraReducers(builder)
    }
})

export default pokemonSlice;

export const pokemonsSelector = state => state.pokemons.home;
export const pokemonDetailsSelector = state => state.pokemons.details;


// export const selectPokemonById = (id) => {
//     return createSelector(
//         pokemonsSelector,
//         (pokemons) => {
//             console.log({ pokemons, id })
//         }
//     )
// }
