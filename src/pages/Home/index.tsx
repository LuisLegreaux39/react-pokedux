import './styles.css';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { useEffectOnce } from "react-use";
import FuzzySearch from 'fuzzy-search';

import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { dispatcher } from "../../state/store";
import { homeSelector } from "../../state/Pokemons"
import { getPokemons } from "../../state/Pokemons/thunks/getAllPokemons";
import TypesDetails from './TypesDetails'
import Loader from '../../components/Loader'


const Home = () => {

  // const selector = useSelector(state=>{
  //   console.log(state),
  //   state
  // });
  // const [currentSearch, setCurrentSearch] = useState('');


  // const search = useCallback(() => {
  //   if (!currentSearch) return list;
  //   const searcher = new FuzzySearch(list, ["name"], {
  //     caseSensitive: false
  //   })
  //   return searcher.search(currentSearch);
  // }, [currentSearch, list])

  // useEffectOnce(() => dispatcher(getPokemons()))
  
  return (
    <div className='Home'>
      <Searcher handleSearch={(search:string) => console.log(search)} />
      <TypesDetails />
      <PokemonList pokemonList={()=>{}} />
    </div>
  );
}




export default Home;
