import service from "../../services/main";

const { get } = service

export const getPokemonDetail =(pokemonUrl)=>get(pokemonUrl);
export const getAllPokemons = (limit = 151) => get(`pokemon?limit=${limit}`);
export const getSeveralIds = (pokemons)=>Promise.all(pokemons.map(pokemon=>getPokemonDetail(pokemon.url)))