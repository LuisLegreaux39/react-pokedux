import React from 'react';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '@/statics/images/logo_v4.svg';


const Menu = () => {
  return (
    <SemanticMenu fixed='top'>
      <Container>
        <SemanticMenu.Item to='/'>
          <Image size='small' src={logo} />
        </SemanticMenu.Item>
        <SemanticMenu.Item >
          <Link to='/'>
            Home
          </Link>
        </SemanticMenu.Item>
        {/* <SemanticMenu.Item >
          <Link to='/abilities'>
            Abilities
          </Link>
        </SemanticMenu.Item> */}

        {/* <SemanticMenu.Item to='/' position='right'>
          Favorites
        </SemanticMenu.Item> */}
      </Container>
    </SemanticMenu>
  );
};

export default Menu;
