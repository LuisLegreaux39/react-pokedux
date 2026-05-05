import React, { useId } from 'react'
import { useEffectOnce } from 'react-use'
import { Grid, GridColumn, Container, GridRow } from 'semantic-ui-react';

import { getPokemons } from '../../state/Pokemons/thunks/getAllPokemons';
import { dispatcher } from '../../state/store';
import { useSelector } from 'react-redux';
import { homeSelector } from '../../state/Pokemons';
import Loader from '../../components/Loader';
import PokemonCard from '../../components/PokemonCard';

const PokemonList = () => {
    const { status, list } = useSelector(homeSelector);
    const id = useId()
    useEffectOnce(() => {
        dispatcher(getPokemons())
    })
    if (status === 'pending' || status === 'idle') return <Loader />
    return <Grid>
            <GridRow columns={12} centered>
                {list.map((props) => <GridColumn computer={3} key={`${id}-${props.id}`}><PokemonCard {...props} /></GridColumn>)}
            </GridRow>
        </Grid>
}

export default PokemonList