import { PokemonType } from './pokemonTypes'

export type PokemonResult = {
    name: string,
    url: string
}

export type PokemonSpecies = {
    flavor_text_entries: Array<{
        flavor_text: string,
        language: {
            name: string,
        },
    }>
}

export type PokemonDetails = {
    abilities: any[],
    height: number,
    weight: number,
    id: number,
    species: PokemonSpecies,
    base_experience: number,
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    },
    types: Array<{ type: PokemonType }>,
    stats: Array<{
        base_stat: number,
        stat: PokemonResult
    }>,
    cries: {
        latest: string
        legacy: string
    }
}

export type Pokemon = PokemonDetails & PokemonResult