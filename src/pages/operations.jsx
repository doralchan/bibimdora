import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import GoLogo from '../assets/logo-go.svg'
import PythonLogo from '../assets/logo-python.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Operations() {
  return (
    <StyledContainer>
      <Subnavigation title='Peated App' subtitle='Insights'>
        <GroupedNav>
          <SubnavGroup>
            <SubnavItem to='overview'>Overview</SubnavItem>
            <SubnavItem to='nextjs' src={NextJSLogo}>NextJS</SubnavItem>
            <SubnavItem to='go' src={GoLogo}>Go</SubnavItem>
            <SubnavItem to='python' src={PythonLogo}>Python</SubnavItem>
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
          <SubnavItem to='all'>All Projects</SubnavItem>        
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

const GroupedNav = styled('div')`
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  gap: var(--space-lg);
  align-items: flex-end;
  height: 100%;
`;

const SubnavGroup = styled('div')``;

export default Operations;
