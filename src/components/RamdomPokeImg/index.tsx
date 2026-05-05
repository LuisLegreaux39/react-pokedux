import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'semantic-ui-react'
import { homeSelector } from '../../state/Pokemons';
import Loader from '../Loader'

const RandomPokeImg = () => {
    const { status, list } = useSelector(homeSelector);

    const source = useMemo(() => {
        const seed = Math.floor((Math.random() * list.length))
        const currenPokemon = list[seed];
        return currenPokemon;
        return null;
    }, [status,list])

    if (status === 'pending' || status === 'idle') return <Loader />
    if (source === null || source === undefined) return null;

    return <Image floated='left' size='mini' src={
        source.sprites.other['official-artwork'].front_default
    } />
}

export default RandomPokeImg