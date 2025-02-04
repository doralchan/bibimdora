import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import IconWrench from '../assets/icon-wrench.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Settings() {
  return (
    <StyledContainer>
      <Subnavigation subtitle='Settings'>
        <SubnavGroup>
          <SubnavItem to='account'>My Account</SubnavItem>
          <SubnavItem to='preferences' src={IconWrench}>Preferences</SubnavItem>
          <SubnavItem to='securityprivacy' src={IconWrench}>Security & Privacy</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='organization'>Organization</SubnavItem>
          <SubnavItem to='services' src={IconWrench}>Services</SubnavItem>
          <SubnavItem to='members' src={IconWrench}>Members</SubnavItem>
          <SubnavItem to='permissions' src={IconWrench}>Permissions</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='config'>Configuration</SubnavItem>
          <SubnavItem to='repos' src={IconWrench}>Repositories</SubnavItem>
          <SubnavItem to='integrations' src={IconWrench}>Integrations</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='billing'>Usage & Billing</SubnavItem>
          <SubnavItem to='subscription' src={IconWrench}>Subscription</SubnavItem>
          <SubnavItem to='limits' src={IconWrench}>Rate Limits</SubnavItem>
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

const SubnavGroup = styled('div')`
  margin-bottom: var(--space-lg);
`;


export default Settings;
