import {
    createSlice,
} from "@reduxjs/toolkit";

import { getPokemonsExtraReducer } from './thunks/getAllPokemons';
import { getPokemonExtraReducers } from './thunks/getPokemonById';
import { getAbilitiesExtraReducer } from './thunks/getAllAbilities';
import { getAllTypesExtraReducer } from './thunks/getAllTypes';
import { getMovesExtraReducers } from './thunks/getMoves';

import { RootState } from '../store';
import { Pokemon } from '../../types/pokemon'


type Status = 'idle' | "pending" | "fulfilled" | "rejected";

type SubSlice<T> = {
    list: T[],
    status: Status,
}

interface PokemonSlice {
    home: {
        list: Pokemon[],
        pokemonCount: number,
        status: Status,
        next: string | null,
        previous: string | null
    },
    details: {
        pokemon: any,
        status: Status,
    },
    abilities: SubSlice<any>,
    types: SubSlice<any>,
    moves: SubSlice<any>
}

const initialState: PokemonSlice = {
    home: {
        list: [],
        next: null,
        pokemonCount: 0,
        previous: null,
        status: 'idle'
    },
    abilities: {
        list: [],
        status: 'idle'
    },
    details: {
        pokemon: null,
        status: "idle"
    },
    moves: {
        list: [],
        status: 'idle'
    },
    types: {
        list: [],
        status: 'idle'
    }
}


export const pokemonSlice = createSlice({
    name: "pokeapi",
    initialState,
    reducers: {},
    extraReducers: builder => {
        getPokemonsExtraReducer(builder),
            getPokemonExtraReducers(builder),
            getAbilitiesExtraReducer(builder),
            getAllTypesExtraReducer(builder),
            getMovesExtraReducers(builder)
    }
})



export const selectIsGeneralLoading = (state: RootState) => state.pokeapi.home.status
export const homeSelector = (state: RootState) => state.pokeapi.home;
export const pokemonDetailsSelector = (state: RootState) => state.pokeapi.details;
export const typesSelector = (state: RootState) => state.pokeapi.types;
