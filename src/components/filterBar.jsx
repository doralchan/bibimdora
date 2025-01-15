import Filter from './filter'
import Input from './input'

import styled from 'styled-components'
import '../styles/theme.css'

function FilterBar({ defaultSelection }) {
  return (
    <StyledFilterBar>
      { defaultSelection ? <Filter projectsOnly defaultSelection={defaultSelection} /> : <Filter defaultSelection={defaultSelection} /> }
      <Input placeholder='Filter events...' />
    </StyledFilterBar>
  )
}

const StyledFilterBar = styled('div')`
  background-color: var(--white);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-unit);
  margin-bottom: var(--space-unit);
`;

export default FilterBar