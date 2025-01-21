import {Outlet} from 'react-router-dom';

import Subnavigation from '../layouts/subnavigation'
import SubnavItem from '../layouts/subnavitem'

import IconSettings from '../assets/icon-settings.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function Settings() {
  return (
    <StyledContainer>
      <Subnavigation title='Peated App' subtitle='Settings'>
        <SubnavGroup>
          <SubnavItem to='account'>My Account</SubnavItem>
          <SubnavItem to='security' src={IconSettings}>Security & Privacy</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='organization'>My Organization</SubnavItem>
          <SubnavItem to='teams' src={IconSettings}>Teams</SubnavItem>
          <SubnavItem to='members' src={IconSettings}>Members</SubnavItem>
        </SubnavGroup>
        <SubnavGroup>
          <SubnavItem to='config'>Configuration</SubnavItem>
          <SubnavItem to='services' src={IconSettings}>Service Map</SubnavItem>
          <SubnavItem to='integration' src={IconSettings}>Integrations</SubnavItem>
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

const SubnavGroup = styled('div')`
  margin-bottom: var(--space-lg);
`;


export default Settings;
