import React, { Fragment } from 'react';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { typeColors } from "@/utils/constants";
import './styles.css';

const PokemonCard = (props) => {

  const { sprites, name, types, id } = props;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <motion.div className='PokemonCard' key={id} variants={item}
          whileHover={{ scale: 1.2,  }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%"
          }}>
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
              <Label style={{ backgroundColor: `#${typeColors[type.name]}`, color: "white" }}>
                {type.name}
              </Label>
            ))}
          </div>
        </motion.div>
      </Grid.Column>
    </>
  );
};

export default PokemonCard;
