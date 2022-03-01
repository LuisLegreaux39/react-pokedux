import React from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { dispatcher } from "../../state/store";
import { useEffectOnce } from "react-use";
import { getPokemons } from "../../state/Pokemons/thunks/getAllPokemons"
import './styles.css';

const Home = () => {

  useEffectOnce(() => {
    dispatcher(getPokemons())
  })
  
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}




export default Home;
