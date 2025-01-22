import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Apps from '../layouts/table_apps'

import Input from '../components/input'
import Widget from '../components/widget'

import styled from 'styled-components'
import '../styles/theme.css'

function ServiceMap() {
  return (
    <Main>
      <Header title='Service Map'/>
      <Body>
        <Layout>
          <StyledInput placeholder='Filter events...'/>
          <Widget title='Visual'/>
          <Apps/>
        </Layout>
      </Body>
    </Main>
  )
}

const Layout = styled('div')`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--space-unit);
`;

const StyledInput = styled(Input)`
  grid-column: 1/3;
`;

export default ServiceMap