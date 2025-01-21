import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Explore() {
  return (
    <StyledContainer>
      <Subnavigation title='Peated App' subtitle='Explore'>
        <SubnavGroup>
          <SubnavItem to='spans'>Spans</SubnavItem>
          <SubnavItem to='errors'>Errors</SubnavItem>
          <SubnavItem to='replays'>Replays</SubnavItem>
          <SubnavItem to='profiles'>Profiles</SubnavItem>
          <SubnavItem to='logs'>Logs</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Starred Queries</SubnavHeader>
          <SubnavItem to='suggested1' src={DefaultLogo}>Worst LCPs</SubnavItem>
          <SubnavItem to='suggested2' src={DefaultLogo}>Biggest Assets</SubnavItem>
          <SubnavItem to='suggested3' src={DefaultLogo}>Top Pageloads</SubnavItem>
          <SubnavItem to='suggested4' src={DefaultLogo}>Slowest Calls</SubnavItem>
          <SubnavItem to='suggested5' src={DefaultLogo}>Top Screenloads</SubnavItem>
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

export default Explore;
