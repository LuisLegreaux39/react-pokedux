import React from 'react';
import { Grid, Search } from 'semantic-ui-react';
import './styles.css';

const SearchBar = (props) => {

  const { bind } = props;

  const handleSearcher = () => {
    return (e) => bind(e.target.value)
  }

  return (
    <div className='Searcher wrapper'>
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className='Searcher'
        >
          <Search
            aligned='right'
            input={{ fluid: true }}
            showNoResults={false}
            onSearchChange={handleSearcher()}
            placeholder='Encuentra a tu Pokemón favorito'
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SearchBar;