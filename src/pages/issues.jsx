import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Issues() {
  return (
    <StyledContainer>
      <Subnavigation title='Peated App' subtitle='Issues'>
        <GroupedNav>
          <SubnavGroup>
            <SubnavItem to='all'>All Issues</SubnavItem>
          </SubnavGroup>
          <SubnavGroup>
            <SubnavHeader>Starred</SubnavHeader>
            <SubnavItem to='saved1' src={DefaultLogo}>Custom View 1</SubnavItem>
            <SubnavItem to='saved2' src={DefaultLogo}>Custom View 2</SubnavItem>
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
  grid-template-columns: 200px auto;
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
