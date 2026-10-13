import './styles.css';
import React, { FC, PropsWithChildren, useState } from 'react';
import { Grid, Pagination } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { motion,HTMLMotionProps } from "framer-motion";

import PokemonCard from './PokemonCard';
import { homeSelector } from "../../state/Pokemons"
import Loader from '../Loader';

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

type MotionDivProps =HTMLMotionProps<"div">

const CenterMotionDiv = (props: PropsWithChildren<MotionDivProps>)=><motion.div {...props} />


const PokemonList: FC<PropsWithChildren<{ list: [] }>> = ({ list }) => {

  const [pagination ,setPaginationSettings] = useState({})

  return <CenterMotionDiv style={{ textAlign:"center"}}>
    <Loader />
  </CenterMotionDiv>

  // if (!status) return null;
  // if (status === 'idle') return <Loader />;

  // return (
  //     <Loader />
  //   // <motion.div className='wrapper' variants={container} initial="hidden" animate="visible">
  //   //   <Grid>
         
  //   //     {pokemonList.map((pokemon, index) => {
  //   //       return <PokemonCard key={`pokemon-${index}`} {...pokemon} />;
  //   //     })}
  //   //     <Grid.Row>
  //   //       <Pagination
  //   //         activePage={0}
  //   //         // onPageChange={this.handlePaginationChange}
  //   //         totalPages={pokemonCount}
  //   //       />
  //   //     </Grid.Row>
  //   //   </Grid>
  //   // </motion.div>
  // );
};

export default PokemonList;
