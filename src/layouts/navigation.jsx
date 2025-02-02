import Sentry from '../components/sentry'
import NavItem from '../layouts/navitem'

import IconIssues from '../assets/icon-issues.svg'
import IconChart from '../assets/icon-chart.svg'
import IconExplore from '../assets/icon-explore.svg'
import IconDashboards from '../assets/icon-dashboards.svg'
import IconSettings from '../assets/icon-settings.svg'
import IconBroadcast from '../assets/icon-broadcast.svg'
import IconNotifications from '../assets/icon-notification.svg'

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
      <NavItem to='new' src={IconBroadcast} />
      <NavItem to='notifications' src={IconNotifications} />
      <NavItem to='settings' src={IconSettings} />
    </NavBottom>
  </NavigationStyles>
);

const NavigationStyles = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--dark200);
  grid-column: 1/2;
  margin: 0;
  border-right: 2px solid var(--dark500);
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
