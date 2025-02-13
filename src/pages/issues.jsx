import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import NodeLogo from '../assets/logo-node.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Issues() {
  return (
    <StyledContainer>
      <Subnavigation subtitle='Issues'>
        <GroupedNav>
          <SubnavGroup>
            <SubnavItem to='all'>All Issues</SubnavItem>
          </SubnavGroup>
          <SubnavGroup>
            <SubnavHeader>Starred Views</SubnavHeader>
            <SubnavItem to='errors' src={DefaultLogo}>Errors & Outages</SubnavItem>
            <SubnavItem to='metrics' src={DefaultLogo}>Metrics</SubnavItem>
            <SubnavItem to='quality' src={DefaultLogo}>Quality</SubnavItem>
            <SubnavItem to='security' src={DefaultLogo}>Security</SubnavItem>
            <SubnavItem to='saved1' src={NextJSLogo}>Custom View 1</SubnavItem>
            <SubnavItem to='saved2' src={NodeLogo}>Custom View 2</SubnavItem>
          </SubnavGroup>
          <SubnavGroup>
            <SubnavItem to='monitors'>Monitors</SubnavItem>
            <SubnavItem to='automations'>Automations</SubnavItem>
          </SubnavGroup>
        </GroupedNav>
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

const GroupedNav = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr;
  gap: var(--space-lg);
  align-items: flex-end;
  height: 100%;
`;

const SubnavGroup = styled('div')``;

export default Issues;
