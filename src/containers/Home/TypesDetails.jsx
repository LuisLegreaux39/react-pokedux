import React, { useState } from 'react'
import { useEffectOnce } from "react-use";
import { Container, Label, Grid, Transition } from "semantic-ui-react";
import { useSelector } from "react-redux"



import { dispatcher } from "@/state/store";
import { getAllTypes } from "@/state/Pokemons/thunks/getAllTypes";
import { typesSelector } from '@/state/Pokemons/index';
import { typeColors } from "@/utils/constants";

const TypesDetails = () => {

    const [visible, setVisibility] = useState(false);

    const { list } = useSelector(state => typesSelector(state));

    useEffectOnce(() => {
        dispatcher(getAllTypes())
        setTimeout(() => {
            setVisibility(true)
        }, 100)
    })
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Transition.Group as={"list"} visible={visible} animation='scale' duration={900}>
                        {list.map(({ name }, _index) => (
                            <Label key={_index} style={{
                                margin: "5px",
                                backgroundColor: `#${typeColors[name]}`,
                                color: "white"
                            }}>{name}</Label>
                        ))}
                    </Transition.Group>

                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default TypesDetails