import React from 'react';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import { MAIN_COLOR } from '@/utils/constants';
import './styles.css';

const PokemonCard = (props) => {

  const { sprites, name, types, id } = props;

  return (
    <>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <div className='PokemonCard' key={id} >
          <Image
            centered
            src={sprites.front_default}
          />
          <Link to={`/${id}`}>
            <h2 className='PokemonCard-title'>{name}</h2>
          </Link>

          <Divider />
          <div className='Pokemon-type'>
            {types.map(({ type }) => (
              <Label color={MAIN_COLOR}>
                {type.name}
              </Label>
            ))}
          </div>
        </div>
      </Grid.Column>
    </>
  );
};

export default PokemonCard;
