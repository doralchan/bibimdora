import {NavLink} from 'react-router-dom';

import Logo from '../components/logo'

import styled from 'styled-components'
import '../styles/theme.css'

function SubnavItem({className, children, src, to, strikethrough}) {
  const navigationActive = ({isActive}) => {
    return {
      opacity: isActive ? '1' : '0.5',
      fontWeight: isActive ? 500 : 400,
      backgroundColor: isActive ? 'white' : 'transparent',
      borderColor: isActive ? '#D6CCFF' : 'transparent',
      color: isActive ? '#5428A3' : '#0A0A0A',
    };
  };

  return (
    <SubnavItemStyles style={navigationActive} to={to} className={className}>
      {src ? <StyledLogo src={src}/> : null}
      {strikethrough ? <Strikethrough>{children}</Strikethrough> : <span>{children}</span>}
    </SubnavItemStyles>
  );
}

const SubnavItemStyles = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--black);
  padding: var(--space-xs) var(--space-md);
  border: 1px solid transparent;
  border-bottom-width: 3px;
  border-radius: var(--radius);
`;

const StyledLogo = styled(Logo)`
  margin-right: var(--space-sm);
  width: var(--space-lg);
  height: var(--space-lg);
`;

const Strikethrough = styled('span')`
  text-decoration: line-through;
`;

export default SubnavItem;
