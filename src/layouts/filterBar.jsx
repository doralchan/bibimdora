import Filter from '../components/filter'
import Input from '../components/input'

import styled from 'styled-components'
import '../styles/theme.css'

function FilterBar({ isServicePage }) {
  return (
    <StyledFilterBar>
      <Filter isServicePage={isServicePage} />
      <Input placeholder='Filter events...' />
    </StyledFilterBar>
  )
}

const StyledFilterBar = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-unit);
  margin-bottom: var(--space-unit);
`;

export default FilterBar