import './theme.css';
import styles from './index.module.css';
import React from 'react'
import { Drawer } from '@base-ui/react/drawer';
import { useSelector } from 'react-redux'

import Loader from '../Loader'
import { pokemonDetailsSelector } from '../../state/Pokemons';
import { Container, Grid, GridRow, GridColumn, Transition, Image } from 'semantic-ui-react';

const DrawerContent = () => {
    const { status, pokemon } = useSelector(pokemonDetailsSelector)

    // if (pokemon === null || status === "idle" || status === "pending") return <Loader />

    return <Drawer.Content className={styles.Content}>
        <Grid >
            <GridColumn  computer={12} verticalAlign='middle'>
                <Transition animation='scale'  >
                    <Image
                        size='medium'
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
                        // src={pokemon.sprites.other['official-artwork'].front_default}
                        centered
                        bordered
                        rounded />
                </Transition>
            </GridColumn>
            <GridColumn computer={4} verticalAlign='middle'>
                <Image.Group size='tiny'>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png" size="small" />
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png" size="small" />
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png" size="small" />
                    <br />
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png" size="small" />
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png" size="small" />
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png" size="small" />
                </Image.Group>
            </GridColumn>
            {/* <Drawer.Title className={styles.Title}>Non-modal drawer</Drawer.Title> */}
            {/* <Drawer.Description className={styles.Description}>
                This drawer does not trap focus and ignores outside clicks. Use the close button or
                swipe to dismiss it.
            </Drawer.Description> */}
        </Grid>

    </Drawer.Content>
}

export default DrawerContent
