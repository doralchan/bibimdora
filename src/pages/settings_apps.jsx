import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import AppList from '../layouts/table_apps'

import Input from '../components/input'
import Widget from '../components/widget'

import Mapping from '../assets/map.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Apps() {
  return (
    <Main>
      <Header title='App Teams'/>
      <Body>
        <Layout>
          <StyledInput placeholder='Filter events...'/>
          <AppList/>
          <Widget title='Service Access Map'>
            <img src={Mapping} alt='' />
          </Widget>
        </Layout>
      </Body>
    </Main>
  )
}

const Layout = styled('div')`
  display: grid;
  grid-template-columns: minmax(35%, 400px) 1fr;
  grid-template-rows: auto 1fr;
  gap: var(--space-unit);
`;

const StyledInput = styled(Input)`
  grid-column: 1/3;
  grid-row: 1/2;
`;

export default Apps