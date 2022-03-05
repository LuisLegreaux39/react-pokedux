import service from "../../services/main";

const { get } = service

export const getPokemonDetail = (pokemonUrl) => get(pokemonUrl);
export const getPokemonIdDetails = (id) => get(`pokemon/${id}`);
export const getAllPokemons = (limit = 151) => get(`pokemon?limit=${limit}`);
export const getSeveralIds = (pokemons) => Promise.all(pokemons.map(pokemon => getPokemonDetail(pokemon.url)));



export const getAllAbilityID = (id) => get(`ability/${id}`);
export const getAllAbilityDetail = (url) => get(url);
export const getAllAbilities = (limit = 327) => get(`ability?limit=${limit}`);
export const getSeveralAbiliesIDs = (abilities) => Promise.all(abilities.map(ability => getAllAbilityDetail(ability.url)));


export const getTypes = () => get(`type`);
