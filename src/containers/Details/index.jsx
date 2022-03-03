import { useEffectOnce } from "react-use";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Loader, Container, Image, List,Label } from 'semantic-ui-react';

import { getPokemon } from "@/state/Pokemons/thunks/getPokemonById";
import { pokemonDetailsSelector } from '@/state/Pokemons/index';
import { MAIN_COLOR } from '@/utils/constants';
import { dispatcher } from "@/state/store";

const { Row, Column } = Grid;
const { Item, Content, Header, Description } = List;

const Index = () => {

    const { id } = useParams();

    const { pokemon, status } = useSelector(state => pokemonDetailsSelector(state))

    useEffectOnce(() => {
        dispatcher(
            getPokemon(
                id
            )
        )
    })

    if (!pokemon) return null;

    if (status === 'pending') return <Loader active >Loading</Loader>;


    return (
        <Container textAlign="center">
            <Grid padded>
                <Row columns={1}>
                    <Column>
                        <h2>{pokemon.name}</h2>
                    </Column>
                </Row>
                <Row columns={2}>
                    <Column>
                        <Image
                            size='medium'
                            src={pokemon.sprites.front_default}
                            centered
                            bordered
                            rounded
                        />
                    </Column>
                    <Column>
                        <List >
                            <Item>
                                <strong>Height</strong>: {pokemon.height}
                            </Item>
                            <Item>
                                <strong>Weight</strong>: {pokemon.weight}
                            </Item>
                            <Item>
                                {pokemon.types.map(({ type },_index) => (
                                    <Label key={_index} color={MAIN_COLOR}>
                                        {type.name}
                                    </Label>
                                ))}
                            </Item>
                        </List>
                    </Column>
                </Row>
            </Grid>
        </Container>
    )
}

export default Index