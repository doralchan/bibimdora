import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import styled from 'styled-components'
import '../styles/theme.css'

import NextJSLogo from '../assets/logo-nextjs.svg'
import DefaultLogo from '../assets/logo-default.svg'
import JavascriptLogo from '../assets/logo-javascript.svg'
import ReactLogo from '../assets/logo-react.svg'
import PythonLogo from '../assets/logo-python.svg'
import RedisLogo from '../assets/logo-redis.svg'
import GoLogo from '../assets/logo-go.svg'
import AppleLogo from '../assets/logo-apple.svg'
import AndroidLogo from '../assets/logo-android.svg'

function Services() {
  return (
    <StyledContainer>
      <Subnavigation title='Insights A'>
        <GroupedNav>
          <SubnavGroup>
            <SubnavItem to='app'>Peated App</SubnavItem>
            <SubnavItem to='nextjs' src={NextJSLogo}>foodfight</SubnavItem>
            <SubnavItem to='default' src={DefaultLogo}>project</SubnavItem>
          </SubnavGroup>
          <SubnavGroup>
            <SubnavItem to='frontend'>Frontend</SubnavItem>
            <SubnavItem to='javascript' src={JavascriptLogo}>admin-portal</SubnavItem>
            <SubnavItem to='react' src={ReactLogo}>help-center</SubnavItem>
          </SubnavGroup>
          <SubnavGroup>
            <SubnavItem to='backend'>Backend</SubnavItem>
            <SubnavItem to='python' src={PythonLogo}>vendors</SubnavItem>
            <SubnavItem to='redis' src={RedisLogo}>recs</SubnavItem>
            <SubnavItem to='go' src={GoLogo}>payments</SubnavItem>
          </SubnavGroup>
          <SubnavGroup>
            <SubnavItem to='mobile'> Mobile</SubnavItem> 
            <SubnavItem to='apple' src={AppleLogo}>foodfightiOS</SubnavItem>
            <SubnavItem to='android' src={AndroidLogo}>foodfightDroid</SubnavItem>
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
  grid-template-rows: repeat(4, auto) 1fr;
  gap: var(--space-lg);
  align-items: flex-end;
  height: 100%;
`;

const SubnavGroup = styled('div')``;

export default Services;
