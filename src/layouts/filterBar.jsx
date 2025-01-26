import Filter from '../components/filter'
import Input from '../components/input'

import styled from 'styled-components'
import '../styles/theme.css'

function FilterBar({ defaultSelection }) {
  return (
    <StyledFilterBar>
      <Filter defaultSelection={defaultSelection} />
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