import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import AppleLogo from '../assets/logo-apple.svg'
import NodeLogo from '../assets/logo-node.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Insights() {
  return (
    <StyledContainer>
      <Subnavigation subtitle='Insights'>
        <SubnavGroup>
          <SubnavItem to='overview-web'>Overview</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Frontend</SubnavHeader>
          <SubnavItem to='ui-web' src={DefaultLogo}>UI Components</SubnavItem>
          <SubnavItem to='assets-web' src={DefaultLogo}>Assets</SubnavItem>
          <SubnavItem to='network-web' src={DefaultLogo}>Network</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Mobile</SubnavHeader>
          <SubnavItem to='appstart' src={DefaultLogo}>App Start</SubnavItem>
          <SubnavItem to='screenloads' src={DefaultLogo}>Screenloads</SubnavItem>
          <SubnavItem to='ui-mobile' src={DefaultLogo}>UI Components</SubnavItem>
          <SubnavItem to='assets-mobile' src={DefaultLogo}>Assets</SubnavItem>
          <SubnavItem to='network-mobile' src={DefaultLogo}>Network</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Backend</SubnavHeader>
          <SubnavItem to='queries' src={DefaultLogo}>Queries</SubnavItem>
          <SubnavItem to='outbound' src={DefaultLogo}>Outbound</SubnavItem>
          <SubnavItem to='cache' src={DefaultLogo}>Cache</SubnavItem>
          <SubnavItem to='queues' src={DefaultLogo}>Queues</SubnavItem>
          <SubnavItem to='crons' src={DefaultLogo}>Crons</SubnavItem>
          <SubnavItem to='uptime' src={DefaultLogo}>Uptime</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavHeader>Starred Services</SubnavHeader>
          <SubnavItem to='web' src={NextJSLogo}>@peated/web</SubnavItem>
          <SubnavItem to='iOS' src={AppleLogo}>@peated/iOS</SubnavItem>
          <SubnavItem to='server' src={NodeLogo}>@peated/server</SubnavItem>
          <SubnavItem to='worker' src={NodeLogo}>@peated/worker</SubnavItem>
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

export default Insights;
