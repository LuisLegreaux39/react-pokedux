import React from 'react'
import { useEffectOnce } from 'react-use'
import { getPokemons } from '../../state/Pokemons/thunks/getAllPokemons'
import { dispatcher } from '../../state/store'
import { useSelector } from 'react-redux'
import { homeSelector } from '../../state/Pokemons'
import Loader from '../../components/Loader'

const PokemonList = () => {
    const { status, pokemonCount } = useSelector(homeSelector);
    useEffectOnce(() => {
        dispatcher(getPokemons())
    })
    if(status === 'pending' ||  status==='idle' ) return  <Loader />
    return (
        <div>PokemonList</div>
    )
}

export default PokemonList