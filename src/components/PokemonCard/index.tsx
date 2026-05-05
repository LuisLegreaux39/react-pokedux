import React, { FC, PropsWithChildren, StyleHTMLAttributes, useEffect, useMemo, useState } from 'react';
import { Image, Label, Divider, Grid, GridProps, Card, CardProps, Icon, Container, CardHeader, CardContent, GridColumn, List, ListItem } from 'semantic-ui-react';
import { motion, HTMLMotionProps } from "framer-motion";
import { Pokemon } from '../../types/pokemon'
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../Loader"

import { typeColors } from "../../utils/constants";


const GridWrapper: FC<PropsWithChildren<GridProps & Pick<StyleHTMLAttributes<unknown>, "style">>> = (props) => <Grid {...props} />

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


const CardLabels: FC<Pick<Pokemon, "types">> = ({ types }) => {
    return <div className='Pokemon-type'>
        {types.map(({ type }) => (
            <Label style={{ backgroundColor: `#${typeColors[type.name as keyof typeof typeColors]}`, color: "white" }}>
                {type.name}
            </Label>
        ))}
    </div>

}

const PokemonCard: FC<Pokemon> = ({ name, cries, height, base_experience, weight, species, sprites, id, types }) => {

    const [audio] = useState(new Audio(cries.legacy))
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

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
        <GridWrapper columns={2} divided
            style={{
                backgroundColor: `#${typeColors[types[0].type.name as keyof typeof typeColors]}`,
                padding: '10px',
                margin: "10px",
                borderRadius: "20px"
            }}
        >
            <GridColumn >
                <Image
                    floated='left'
                    size='small'
                    src={sprites.other['official-artwork'].front_default}
                />
            </GridColumn>
            <GridColumn floated='left'>
                <Label horizontal ribbon floating style={{ left: "50%", top: "-2em" }}> {name} </Label>

                <List >
                    <ListItem><strong>Height:</strong>{height}</ListItem>
                    <ListItem><strong>Weight:</strong>{weight}</ListItem>
                    <ListItem><strong>Base exp:</strong>{base_experience}</ListItem>
                    <ListItem>
                        <Label horizontal onClick={toggle}>
                            {!playing ? <><Icon name='play' /> Cries</> : <Loader />}
                        </Label>
                    </ListItem>
                </List>
            </GridColumn>
        </GridWrapper>

    );
};

export default PokemonCard;
