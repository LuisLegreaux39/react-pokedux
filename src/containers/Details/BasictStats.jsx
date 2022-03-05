import React from 'react';
import { Card, Progress, Table, Label } from 'semantic-ui-react'
import { MAIN_COLOR, ABILITY_COLOR } from '@/utils/constants';

const BasictStats = ({ height, weight, base_experience, name, stats, types, abilities }) => {

    let progressStats = {
        "hp": "green",
        "attack": 'yellow',
        "defense": 'teal',
        "special-attack": "purple",
        "special-defense": "violet",
        "speed": "red"
    }

    return (
        <Card fluid >
            <Card.Content>
                <Card.Header as={'h2'}>{name}</Card.Header>
                <Card.Description>

                    <Table celled compact textAlign='center'> 
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell collapsing>Abilities</Table.Cell>
                                <Table.Cell >
                                    {abilities.map(({ ability }, _index) => (
                                        <Label key={_index} color={ABILITY_COLOR} style={{ margin:"1px"}} >
                                            {ability.name}
                                        </Label>
                                    ))}

                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>Height</Table.Cell>
                                <Table.Cell>{height}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>Weight</Table.Cell>
                                <Table.Cell>{weight}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>Base Experience</Table.Cell>
                                <Table.Cell>{base_experience}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell collapsing>Types</Table.Cell>
                                <Table.Cell>
                                    {types.map(({ type }, _index) => (
                                        <Label key={_index} color={MAIN_COLOR}>
                                            {type.name}
                                        </Label>
                                    ))}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    {stats.map(({ stat, base_stat }, _index) => (
                        <Progress
                            label={stat.name}
                            key={_index}
                            value={base_stat}
                            total={base_stat + 100}
                            progress='value'
                            color={progressStats[stat.name]} />
                    ))}
                </Card.Description>
            </Card.Content>
        </Card >
    )
}

export default BasictStats