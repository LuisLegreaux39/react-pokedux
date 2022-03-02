import {
    createSlice
} from "@reduxjs/toolkit";
import { getPokemonsExtraReducer } from './thunks/getAllPokemons'


const pokemonSlice = createSlice({
    name:"pokemons",
    initialState:{
        list:[],
        status:null
    },
    extraReducers:builder=>{
        getPokemonsExtraReducer(builder)
    }
})

export default pokemonSlice;

export const pokemonSelector = state =>state.pokemons;
