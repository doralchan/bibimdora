import {NavLink} from 'react-router-dom';
import {useState} from 'react';

import IconStarFilled from '../assets/icon-star-filled.svg'
import IconStarEmpty from '../assets/icon-star-empty.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function StarredItem({className, to, defaultStarred, children}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledItem className={className}>
      <StyledIcon 
        onClick={() => setIsActive(!isActive)}
        defaultStarred={defaultStarred}
        src={isActive ? IconStarFilled : IconStarEmpty}
      />
      <StyledLink to={to}>{children}</StyledLink>
    </StyledItem>
  )
}

const StyledItem = styled('div')`
  display: flex;
  gap: var(--space-sm);
  align-items: center;
`;

const StyledIcon = styled('img')`
  width: var(--space-lg);
  height: var(--space-lg);
  cursor: pointer;
`;

const StyledLink = styled(NavLink)`
  color: var(--purple100);
  text-decoration: none;
`;

export default StarredItem;