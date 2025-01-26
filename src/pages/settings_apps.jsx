import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import AppList from '../layouts/table_apps'

import Input from '../components/input'
import Widget from '../components/widget'
import Button from '../components/button'

import AvatarBg from '../assets/avatar.png'
import Mapping from '../assets/map.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Apps() {
  return (
    <Main>
      <Header title='App Teams'/>
      <Body>
        <Layout>
          <Controls>
            <StyledInput placeholder='Filter events...'/>
            <Button>+ Add App Team</Button>
          </Controls>
          <StyledAppList />
          <Widget title='Service Map'>
            <img src={Mapping} alt='' />
          </Widget>
          <Widget title='Member List'>
            <MemberList>
              <ActiveAvatar />
              <DisabledAvatar />
              <DisabledAvatar />
              <DisabledAvatar />
            </MemberList>
          </Widget>
        </Layout>
      </Body>
    </Main>
  )
}

const Layout = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-unit);
`;

const StyledAppList = styled(AppList)`
  grid-column: 1/3;
`;

const Controls = styled('div')`
  display: flex;
  grid-column: 1/3;
  gap: var(--space-unit);
`;

const StyledInput = styled(Input)`
  flex-grow: 1;
`;

const MemberList = styled('div')`
  display: flex;
  gap: var(--space-md);
  margin: var(--space-md) 0;
`;

const ActiveAvatar = styled('div')`
  border: 2px solid var(--purple300);
  aspect-ratio: 1/1;
  width: 40px;
  border-radius: 100%;
  background-image: url(${AvatarBg});
  background-size: 180% 180%;
  background-position: center;
`;

const DisabledAvatar = styled(ActiveAvatar)`
  border-color: var(--gray200);
  background-image: none;
`;

export default Apps