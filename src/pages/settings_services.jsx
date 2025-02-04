import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import AppList from '../layouts/table_services'
import OtherList from '../layouts/table_other'

import Input from '../components/input'
import Button from '../components/button'

import styled from 'styled-components'
import '../styles/theme.css'

function Services() {
  return (
    <Main>
      <Header title='Services'/>
      <Body>
        <Controls>
          <StyledInput placeholder='Filter events...'/>
          <Button>+ Add Group</Button>
          <Button priority>+ Add Service</Button>
        </Controls>
        <StyledAppList />
        <OtherList />
      </Body>
    </Main>
  )
}

const Controls = styled('div')`
  display: flex;
  grid-column: 1/3;
  gap: var(--space-unit);
  margin-bottom: var(--space-unit);
`;

const StyledInput = styled(Input)`
  flex-grow: 1;
`;

const StyledAppList = styled(AppList)`
  margin-bottom: var(--space-unit);
`;

export default Services