import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Issues() {
  return (
    <StyledContainer>
      <Subnavigation title='Issues'>
        <SubnavGroup>
          <SubnavItem to='all'>All Issues</SubnavItem>
        </SubnavGroup>
        <SubnavHeader>Starred</SubnavHeader>
        <SubnavGroup>
          <SubnavItem to='saved1' src={DefaultLogo}>Custom View 1</SubnavItem>
          <SubnavItem to='saved2' src={DefaultLogo}>Custom View 2</SubnavItem>
        </SubnavGroup>
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

const SubnavGroup = styled('div')`
  margin-bottom: var(--space-lg);
`;

export default Issues;
