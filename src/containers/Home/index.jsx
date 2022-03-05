import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux'
import { useEffectOnce } from "react-use";
import FuzzySearch from 'fuzzy-search';

import Searcher from '@/components/Searcher';
import PokemonList from '@/components/PokemonList';
import { dispatcher } from "@/state/store";
import { pokemonsSelector } from "@/state/Pokemons"
import { getPokemons } from "@/state/Pokemons/thunks/getAllPokemons";
import TypesDetails from './TypesDetails'

import './styles.css';

const Home = () => {

  const [currentSearch, setCurrentSearch] = useState('');

  const { list } = useSelector(state=>pokemonsSelector(state));

  const search = useCallback(() => {
    if (!currentSearch) return list;
    const searcher = new FuzzySearch(list, ["name"], {
      caseSensitive: false
    })
    return searcher.search(currentSearch);
  }, [currentSearch, list])

  useEffectOnce(() => dispatcher(getPokemons()))

  return (
    <div className='Home'>
      <Searcher bind={(search) => setCurrentSearch(search)} />
      <TypesDetails />
      <PokemonList pokemonList={search()} />
    </div>
  );
}




export default Home;
