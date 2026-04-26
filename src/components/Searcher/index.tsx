import './styles.css';
import React, { FC } from 'react';
import { Grid, Search,SearchProps } from 'semantic-ui-react';

type Props = {
  handleSearch: (currentSearch: string ) => void
}
const SearchBar: FC<Props> = ({ handleSearch }) => {
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
            onSearchChange={(_, { value }: SearchProps)=>handleSearch(value || "")}
            placeholder='Find a pokemon....'
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SearchBar;