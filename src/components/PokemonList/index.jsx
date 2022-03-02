import React,{ useEffect } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import PokemonCard from './PokemonCard';
import './styles.css';

const PokemonList = (props) => {

  const { pokemonList } = props;

  const { status } = useSelector(state => state.pokemons)

  if (!status) return null;
  if (status === 'pending') return <Loader active >Loading</Loader>;

  return (
    <div className='wrapper'>
      <Grid>
        {pokemonList.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} {...pokemon} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
