import service from "../../services/main";
import { Pokemon } from '../../types/pokemon';
import { PokemonType } from '../../types/pokemonTypes';

type GenericWrapper<T> = {
    count: number,
    next: string | null,
    previous: string | null,
    results: T
}

export const getPokemonDetail = (pokemonUrl: string) => service.getRequest({ path: pokemonUrl });
export const getPokemonIdDetails = (id: string) => service.getRequest({ path: `pokemon/${id}` });
export const getAllPokemons = (limit = 10) => service.getRequest<GenericWrapper<Pokemon[]>>({ path: `pokemon?limit=?limit=${limit}&offset=200` });
export const getAllAbilityID = (id: string) => service.getRequest({ path: `ability/${id}` });
export const getAllAbilityDetail = (url: string) => service.getRequest({ path: url });
export const getAllAbilities = (limit = 327) => service.getRequest({ path: `ability?limit=${limit}` });

export const getTypes = async () => await service.getRequest<GenericWrapper<PokemonType[]>>({ path: `type` });

export const getMoves = () => service.getRequest({ path: `move` });

export const getMoveDetails = (url: string) => service.getRequest({ path: url });


export const getSeveralAbiliesIDs = (abilities: { url: string }[]) => Promise.all(abilities.map(ability => getAllAbilityDetail(ability.url)));
export const getSeveralIds = (pokemons: { url: string }[]) => Promise.all(pokemons.map(pokemon => getPokemonDetail(pokemon.url)));
export const getSeveralMoveDetails = (moves: { url: string }[]) => Promise.all(moves.map(move => getMoveDetails(move.url)));