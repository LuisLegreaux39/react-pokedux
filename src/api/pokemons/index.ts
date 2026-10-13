import service from "../../services/main";
import { PokemonDetails,PokemonResult } from '../../types/pokemon';
import { PokemonType } from '../../types/pokemonTypes';

type GenericWrapper<T> = {
    count: number,
    next: string | null,
    previous: string | null,
    results: T
}

export const getPokemonDetail = (pokemonUrl: string) => service.getRequest<PokemonDetails>({ path: pokemonUrl });
export const getAllPokemons = (limit = 20) => service.getRequest<GenericWrapper<PokemonResult[]>>({ path: `pokemon?limit=${limit}&offset=0` });
export const getTypes = async () => await service.getRequest<GenericWrapper<PokemonType[]>>({ path: `type` });

export const getPokemonIdDetails = (id: string) => service.getRequest({ path: `pokemon/${id}` });
export const getAllAbilityID = (id: string) => service.getRequest({ path: `ability/${id}` });
export const getAllAbilityDetail = (url: string) => service.getRequest({ path: url });
export const getAllAbilities = (limit = 327) => service.getRequest({ path: `ability?limit=${limit}` });
export const getPokemonSpecies = async (id: string)=> await service.getRequest({ path: `pokemon-species/${id}` });


export const getMoves = () => service.getRequest({ path: `move` });

export const getMoveDetails = (url: string) => service.getRequest({ path: url });


export const getSeveralAbiliesIDs = (abilities: { url: string }[]) => Promise.all(abilities.map(ability => getAllAbilityDetail(ability.url)));
export const getSeveralMoveDetails = (moves: { url: string }[]) => Promise.all(moves.map(move => getMoveDetails(move.url)));