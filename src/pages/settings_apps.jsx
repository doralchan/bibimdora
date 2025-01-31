import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import AppList from '../layouts/table_apps'

import Input from '../components/input'
import Button from '../components/button'

import styled from 'styled-components'
import '../styles/theme.css'

function Apps() {
  return (
    <Main>
      <Header title='App Teams'/>
      <Body>
        <Controls>
          <StyledInput placeholder='Filter events...'/>
          <Button priority>+ Add App Team</Button>
        </Controls>
        <AppList />
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

export default Apps