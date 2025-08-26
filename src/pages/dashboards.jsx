import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import AppleLogo from '../assets/logo-apple.svg'
import NodeLogo from '../assets/logo-node.svg'
import LaravelLogo from '../assets/logo-laravel.svg'

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
          <SubnavItem to='web' src={NextJSLogo}>@peated/web</SubnavItem>
          <SubnavItem to='iOS' src={AppleLogo}>@peated/iOS</SubnavItem>
          <SubnavItem to='server' src={NodeLogo}>@peated/server</SubnavItem>
          <SubnavItem to='worker' src={NodeLogo}>@peated/worker</SubnavItem>
          <SubnavItem to='api' src={LaravelLogo}>@peated/API</SubnavItem>
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
