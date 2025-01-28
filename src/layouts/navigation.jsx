import Sentry from '../components/sentry'
import NavItem from '../layouts/navitem'

import IconIssues from '../assets/icon-issues.svg'
import IconChart from '../assets/icon-chart.svg'
import IconExplore from '../assets/icon-explore.svg'
import IconDashboards from '../assets/icon-dashboards.svg'
import IconSettings from '../assets/icon-settings.svg'
import IconBroadcast from '../assets/icon-broadcast.svg'

import styled from 'styled-components'

const Navigation = ({className}) => (
  <NavigationStyles className={className}>
    <NavTop>
      <StyledSentry />
      <NavItem to='issues' src={IconIssues} />
      <NavItem to='explore' src={IconExplore} />
      <NavItem to='dashboards' src={IconDashboards} />
      <NavItem to='insights' src={IconChart} />
    </NavTop>
    <NavBottom>
      <NavItem to='notifications' src={IconBroadcast} />
      <NavItem to='settings' src={IconSettings} />
    </NavBottom>
  </NavigationStyles>
);

const NavigationStyles = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--purple300);
  grid-column: 1/2;
  margin: 0;
  border-right: 1px solid var(--gray200);
  max-height: 100vh;
`;

const StyledSentry = styled(Sentry)`
  margin-bottom: var(--space-md);
`

const NavTop = styled('div')`
  display: flex;
  flex-direction: column;
  padding: var(--space-lg) var(--space-md);
  gap: var(--space-sm);
`;

const NavBottom = styled('div')`
  display: flex;
  flex-direction: column;
  padding: var(--space-lg) var(--space-md);
  gap: var(--space-sm);
`;

export default Navigation;
