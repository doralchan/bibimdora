import {useState} from 'react'
import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import DefaultLogo from '../assets/logo-default.svg'
import JavascriptLogo from '../assets/logo-javascript.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import AppleLogo from '../assets/logo-apple.svg'
import NodeLogo from '../assets/logo-node.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Insights() {
  const [selected, setSelect] = useState();

  const FrontendProject = <SubnavItem to='web' src={NextJSLogo}>@peated/web</SubnavItem>;
  const MobileProject = <SubnavItem to='iOS' src={AppleLogo}>@peated/iOS</SubnavItem>;
  const AdminProject = <SubnavItem to='admin' src={JavascriptLogo}>@peated/admin</SubnavItem>;

  const FrontendModules = (
    <SubnavGroup>
      <SubnavHeader>Frontend</SubnavHeader>
      <SubnavItem to='webvitals' src={DefaultLogo}>Web Vitals</SubnavItem>
      <SubnavItem to='ui' src={DefaultLogo}>UI</SubnavItem>
      <SubnavItem to='assets' src={DefaultLogo}>Assets</SubnavItem>
      <SubnavItem to='network' src={DefaultLogo}>Network</SubnavItem>
    </SubnavGroup>
  );
  
  const MobileModules = (
    <SubnavGroup>
      <SubnavHeader>Mobile</SubnavHeader>
      <SubnavItem to='appstart' src={DefaultLogo}>App Start</SubnavItem>
      <SubnavItem to='screenloads' src={DefaultLogo}>Screenloads</SubnavItem>
      <SubnavItem to='ui' src={DefaultLogo}>UI</SubnavItem>
      <SubnavItem to='assets' src={DefaultLogo}>Assets</SubnavItem>
      <SubnavItem to='network' src={DefaultLogo}>Network</SubnavItem>
    </SubnavGroup>
  );

  const Starred = (
    <SubnavGroup>
      <SubnavHeader>Starred</SubnavHeader>
      <SubnavItem to='scrapers' src={NodeLogo}>Scrapers</SubnavItem>
    </SubnavGroup>
  );

  return (
    <StyledContainer>
      <Subnavigation 
        subtitle='Insights' 
        defaultValue={selected} 
        onChange={(e) => {setSelect(e.value)}}
        >
        <SubnavGroup>
          <SubnavItem to='overview-web'>Overview</SubnavItem>
          {selected === 'mobile' ? MobileProject : selected === 'admin' ? AdminProject : selected === 'platform' ? null : FrontendProject}
          <SubnavItem to='server' src={NodeLogo}>@peated/server</SubnavItem>
          <SubnavItem to='worker' src={NodeLogo}>@peated/worker</SubnavItem>
        </SubnavGroup>
        {selected === 'mobile' ? MobileModules : selected === 'platform' ? null : FrontendModules}
        <SubnavGroup>
          <SubnavHeader>Backend</SubnavHeader>
          <SubnavItem to='queries' src={DefaultLogo}>Queries</SubnavItem>
          <SubnavItem to='outbound' src={DefaultLogo}>Outbound</SubnavItem>
          <SubnavItem to='cache' src={DefaultLogo}>Cache</SubnavItem>
          <SubnavItem to='queues' src={DefaultLogo}>Queues</SubnavItem>
          <SubnavItem to='crons' src={DefaultLogo}>Crons</SubnavItem>
          <SubnavItem to='uptime' src={DefaultLogo}>Uptime</SubnavItem>
        </SubnavGroup>
        {selected === 'platform' ? Starred : null}
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
