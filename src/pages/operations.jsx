import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import NodeLogo from '../assets/logo-node.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Operations() {
  return (
    <StyledContainer>
      <Subnavigation title='Peated App' subtitle='Insights'>
        <SubnavGroup>
          <SubnavItem to='overview'>Overview</SubnavItem>
          <SubnavItem to='web' src={NextJSLogo}>@peated/web</SubnavItem>
          <SubnavItem to='server' src={NodeLogo}>@peated/server</SubnavItem>
          <SubnavItem to='worker' src={NodeLogo}>@peated/worker</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='frontend'>Frontend</SubnavItem>
          <SubnavItem to='webvitals' src={DefaultLogo}>Web Vitals</SubnavItem>
          <SubnavItem to='ui' src={DefaultLogo}>UI</SubnavItem>
          <SubnavItem to='assets' src={DefaultLogo}>Assets</SubnavItem>
          <SubnavItem to='network' src={DefaultLogo}>Network</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='backend'>Backend</SubnavItem>
          <SubnavItem to='queries' src={DefaultLogo}>Queries</SubnavItem>
          <SubnavItem to='outbound' src={DefaultLogo}>Outbound</SubnavItem>
          <SubnavItem to='cache' src={DefaultLogo}>Cache</SubnavItem>
          <SubnavItem to='queues' src={DefaultLogo}>Queues</SubnavItem>
          <SubnavItem to='crons' src={DefaultLogo}>Crons</SubnavItem>
          <SubnavItem to='uptime' src={DefaultLogo}>Uptime</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Starred</SubnavHeader>
          <SubnavItem to='scrapers' src={NodeLogo}>Scrapers</SubnavItem>
        </SubnavGroup>
      </Subnavigation>
      <Outlet/>
    </StyledContainer>
  )
}

// Add a "custom views/dashboards" and "Scrapers" saved under it, keep all projects config in settings
// Hover over per sidebar item and be able dismiss with ability to reaccess 

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

export default Operations;
