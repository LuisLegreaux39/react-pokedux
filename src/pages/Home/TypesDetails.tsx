import React, { useState } from 'react'
import { useEffectOnce } from "react-use";
import { Container, Label, Grid, Transition } from "semantic-ui-react";
import { useSelector } from "react-redux"

import { dispatcher } from "../../state/store";
import { getAllTypes } from "../../state/Pokemons/thunks/getAllTypes";
import { typesSelector } from '../../state/Pokemons/index';
import { typeColors } from "../../utils/constants";
import RandomPokeImg from '../../components/RamdomPokeImg';




const TypesDetails = () => {

    const [visible, setVisibility] = useState(false);
    const { list } = useSelector(typesSelector);

    useEffectOnce(() => {
        dispatcher(getAllTypes())
    })
    return (
        <Grid centered>
            <Grid.Row>
                <RandomPokeImg />
                <RandomPokeImg />
                <RandomPokeImg />
                <Transition.Group as={"list"} visible={visible} animation='scale' duration={900}>
                    {list.map(({ name }, _index) => (
                        <Label key={_index} style={{
                            margin: "5px",
                            backgroundColor: `#${typeColors[name as keyof typeof typeColors]}`,
                            color: "white"
                        }}>{name}</Label>
                    ))}
                </Transition.Group>
                <RandomPokeImg />
                <RandomPokeImg />
                <RandomPokeImg />
            </Grid.Row>

        </Grid>
    )
}

export default TypesDetails