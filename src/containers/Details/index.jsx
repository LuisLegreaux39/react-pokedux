import React, { useState } from 'react'
import { useEffectOnce } from "react-use";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"
import { Grid, Loader, Container, Image, Transition } from 'semantic-ui-react';

import { getPokemon } from "@/state/Pokemons/thunks/getPokemonById";
import { pokemonDetailsSelector } from '@/state/Pokemons/index';
import BasictStats from "./BasictStats"
import { dispatcher } from "@/state/store";

const { Row, Column } = Grid;

const Index = () => {

    const [visible, setVisibility] = useState(false);

    const { id } = useParams();

    const { pokemon, status } = useSelector(state => pokemonDetailsSelector(state))

    useEffectOnce(() => {
        dispatcher(
            getPokemon(
                id
            )
        )
        setTimeout(() => {
            setVisibility(true)
        }, 200)
    })

    if (!pokemon) return null;

    if (status === 'pending') return <Loader active >Loading</Loader>;


    return (
        <Container textAlign="center">
            <br />
            <Grid padded doubling>
                <Row columns={2}>
                    <Column >
                        <Transition visible={visible} animation='scale' duration={500} >
                            <Image
                                size='medium'
                                src={pokemon.sprites.other['official-artwork'].front_default}
                                centered
                                bordered
                                rounded
                            />
                        </Transition>

                        <Image.Group size='tiny'>
                            <Image src={pokemon.sprites.front_default} size="small" />
                            <Image src={pokemon.sprites.back_default} size="small" />
                            <Image src={pokemon.sprites.front_shiny} size="small" />
                            <br />
                            <Image src={pokemon.sprites.other.dream_world.front_default} size="small" />
                            <Image src={pokemon.sprites.other.home.front_default} size="small" />
                            <Image src={pokemon.sprites.other.home.front_shiny} size="small" />
                        </Image.Group>
                    </Column>
                    <Column>
                        <motion.div
                            initial={{ scale: 0, }}
                            animate={{  scale: 1,animationDelay:0.3 }}
                        >
                            <BasictStats {...pokemon} />
                        </motion.div>
                    </Column>
                </Row>
                <Row columns={5} >
                    {pokemon.moves.map(({ move }, _index) => (
                        <Column key={_index}>
                            {move.name}
                        </Column>
                    ))}
                </Row>
            </Grid>
        </Container>
    )
}

export default Index