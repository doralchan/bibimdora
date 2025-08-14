import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Dashboards(){
  return (
    <StyledContainer>
      <Subnavigation subtitle='Dashboards'>
        <SubnavGroup>
          <SubnavItem to='dashboards-overview'>Overview</SubnavItem>
          <SubnavItem to='all'>All Dashboards</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Starred Dashboards</SubnavHeader>
          <SubnavItem to='saved1' src={DefaultLogo}>Custom Dash 1</SubnavItem>
          <SubnavItem to='saved2' src={DefaultLogo}>Custom Dash 2</SubnavItem>
        </SubnavGroup>
      </Subnavigation>
      <Outlet/>
    </StyledContainer>
  )
}

const StyledContainer = styled('div')`
  display: grid;
  grid-template-columns: 210px auto;
  overflow: scroll;
`;

const SubnavHeader = styled('h4')`
  margin: 0 var(--space-md);
  margin-bottom: var(--space-sm);
`;

const SubnavGroup = styled('div')`
  margin-bottom: var(--space-lg);
`;

export default Dashboards;
