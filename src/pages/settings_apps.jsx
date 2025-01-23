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
      <Header title='Apps & Services'/>
      <Body>
        <Layout>
          <StyledInput placeholder='Filter events...'/>
          <AppList/>
          <Widget title='Service Map'>
            <img src={Mapping} alt='' />
          </Widget>
        </Layout>
      </Body>
    </Main>
  )
}

const Layout = styled('div')`
  display: grid;
  grid-template-columns: minmax(20%, 500px) 1fr;
  gap: var(--space-unit);
`;

const StyledInput = styled(Input)`
  grid-column: 1/3;
`;

export default Apps