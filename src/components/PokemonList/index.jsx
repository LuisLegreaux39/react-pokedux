import React, { useState } from 'react';
import { Grid, Loader, Pagination } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

import PokemonCard from './PokemonCard';
import { pokemonsSelector } from "@/state/Pokemons"
import './styles.css';

const PokemonList = (props) => {

  const [pagination ,setPaginationSettings] = useState({})

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const { pokemonList } = props;

  const { status , pokemonCount } = useSelector(state => pokemonsSelector(state));

  if (!status) return null;
  if (status === 'pending') return <Loader active >Loading</Loader>;

  return (
    <motion.div className='wrapper' variants={container} initial="hidden"
      animate="visible">
      <Grid>
        {pokemonList.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} {...pokemon} />;
        })}
        <Grid.Row>
          <Pagination
            activePage={0}
            // onPageChange={this.handlePaginationChange}
            totalPages={pokemonCount}
          />
        </Grid.Row>
      </Grid>
    </motion.div>
  );
};

export default PokemonList;
