import {NavLink} from 'react-router-dom';

import styled from 'styled-components'
import '../styles/theme.css'

function TabnavItem({className, children, to}) {
  const navigationActive = ({isActive}) => {
    return {};
  };

  return (
    <TabnavItemStyles style={navigationActive} to={to} className={className}>
      {children}
    </TabnavItemStyles>
  );
}

const TabnavItemStyles = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--black);
  border: 1px solid transparent;
  border-bottom-width: 3px;
  border-radius: var(--radius);
  padding: var(--space-xs) var(--space-md);
  opacity: 0.5;

  &:first-child {
    color: var(--purple300);
    background-color: var(--white);
    border-color: var(--purple100);
    font-weight: 500;
    opacity: 1;
  }
`;

export default TabnavItem;
