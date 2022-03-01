import React from 'react';
import { Grid,Loader } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

import './styles.css';

const PokemonList = () => {

  const { list,status } = useSelector(state=>state.pokemons)
  
  if(status === 'pending') return  <Loader inverted>Loading</Loader>

  return (
    <div className='wrapper'>
      <Grid>
        {list.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} {...pokemon} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
