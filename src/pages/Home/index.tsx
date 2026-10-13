import './styles.css';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { useEffectOnce } from "react-use";
import FuzzySearch from 'fuzzy-search';

import Searcher from '../../components/Searcher';
import TypesDetails from './TypesDetails'
import PokemonList from './PokemonList';
import { dispatcher } from "../../state/store";
import { homeSelector } from "../../state/Pokemons"
import { getPokemons } from "../../state/Pokemons/thunks/getAllPokemons";
import Loader from '../../components/Loader'
import { Container } from 'semantic-ui-react';


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
  
  return <div className='home'>
      <Searcher handleSearch={(search:string) => console.log(search)} />
      <TypesDetails />
      <PokemonList  />
    </div>
}




export default Home;
