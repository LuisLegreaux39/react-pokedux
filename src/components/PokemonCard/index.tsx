import React, { lazy, FC, PropsWithChildren, ReactNode, StyleHTMLAttributes, useEffect, useMemo, useState } from 'react';
import { Image, Label, Divider, Grid, GridProps, Card, CardProps, Icon, Container, CardHeader, CardContent, GridColumn, List, ListItem, GridRow } from 'semantic-ui-react';
import { motion, HTMLMotionProps } from "framer-motion";
import { Pokemon } from '../../types/pokemon'
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../Loader"
import styled from "styled-components"

import { typeColors } from "../../utils/constants";
import Drawer from '../Drawer'
import { useWindowSize } from 'react-use';

import Bg_normal from '../../statics/images/greypokeball-normal.png';
import Bg_fighting from '../../statics/images/greypokeball-fighting.png';
import Bg_flying from '../../statics/images/greypokeball-flying.png';
import Bg_poison from '../../statics/images/greypokeball-poison.png';
import Bg_ground from '../../statics/images/greypokeball-ground.png';
import Bg_rock from '../../statics/images/greypokeball-rock.png';
import Bg_bug from '../../statics/images/greypokeball-bug.png';
import Bg_ghost from '../../statics/images/greypokeball-ghost.png';
import Bg_steel from '../../statics/images/greypokeball-steel.png';
import Bg_water from '../../statics/images/greypokeball-water.png';
import Bg_fire from '../../statics/images/greypokeball-fire.png';
import Bg_grass from '../../statics/images/greypokeball-grass.png';
import Bg_electric from '../../statics/images/greypokeball-electric.png';
import Bg_dragon from '../../statics/images/greypokeball-dragon.png';
import Bg_ice from '../../statics/images/greypokeball-ice.png';
import Bg_psychic from '../../statics/images/greypokeball-psychic.png';
import Bg_dark from '../../statics/images/greypokeball-dark.png';
import Bg_fairy from '../../statics/images/greypokeball-fairy.png';
import Bg_unknown from '../../statics/images/greypokeball-unknown.png';
import Bg_shadow from '../../statics/images/greypokeball-shadow.png';


const GridWrapper: FC<PropsWithChildren<GridProps & Pick<StyleHTMLAttributes<unknown>, "style">>> = (props) => <Grid {...props} />

const StyledGridWrapper = styled(GridWrapper) <{ $color: string, $bgImage: ReactNode }>`
        background-image: ${(props) => (`url("${props.$bgImage}")`)};
        background-color: ${props => (`#${props.$color}`)};
        border-radius:20px;
        margin-bottom:1px !important;
        background-size: contain;
        background-position: left center;
        background-repeat: no-repeat;
`

const StyledH5 = styled.h5`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

// const CardLabels: FC<Pick<Pokemon, "types">> = ({ types }) => {
//     return <>
//         {types.map(({ type }) => (
//             <Label style={{ backgroundColor: `#${typeColors[type.name as keyof typeof typeColors]}`, color: "white" }}>
//                 {type.name}
//             </Label>
//         ))}

//     </>

// }

const PokemonCard: FC<Pokemon> = ({ name, cries, height, weight, sprites, types }) => {

    const [audio] = useState(new Audio(cries.legacy));
    const [playing, setPlaying] = useState(false);
    const { width } = useWindowSize();

    const toggle = () => setPlaying(!playing);

    const currentBg = useMemo(
        () => {
            return {
                normal: Bg_normal,
                fighting: Bg_fighting,
                flying: Bg_flying,
                poison: Bg_poison,
                ground: Bg_ground,
                rock: Bg_rock,
                bug: Bg_bug,
                ghost: Bg_ghost,
                steel: Bg_steel,
                water: Bg_water,
                fire: Bg_fire,
                grass: Bg_grass,
                electric: Bg_electric,
                dragon: Bg_dragon,
                ice: Bg_ice,
                psychic: Bg_psychic,
                dark: Bg_dark,
                fairy: Bg_fairy,
                unknown: Bg_unknown,
                shadow: Bg_shadow
            }[types[0].type.name as keyof typeof typeColors]
        }
        , [types])

    const isMobile = useMemo(() => width < 1300, [width])

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return (

        <StyledGridWrapper
            verticalAlign='middle'
            centered
            $color={typeColors[types[0].type.name as keyof typeof typeColors]}
            $bgImage={currentBg}>
            {/* {
                !isMobile ? null : <GridRow centered>
                    <Label horizontal  > {name} </Label>
                </GridRow>
            } */}

            <GridColumn mobile={16} largeScreen={8} widescreen={8} floated='left'>
                <Image
                    size="medium"
                    src={sprites.other['official-artwork'].front_default}
                />
            </GridColumn>
            {
                !isMobile ? <GridColumn largeScreen={6} widescreen={6} floated='left'>
                    <List >
                        <ListItem>
                            {name && <StyledH5>{`${name[0].toUpperCase()}${name.substring(1, name.length)}`}</StyledH5>}
                        </ListItem>
                        <Divider fitted />
                        <ListItem><strong>Height:</strong>{height}</ListItem>
                        <ListItem><strong>Weight:</strong>{weight}</ListItem>
                        <ListItem>
                            <Label horizontal onClick={toggle}>
                                {!playing ? <Icon name='play' /> : <Loader />}
                            </Label>
                        </ListItem>
                    </List>
                </GridColumn> : null
            }
        <Drawer />
        </StyledGridWrapper>

    );
};

export default PokemonCard;
