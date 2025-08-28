import {NavLink} from 'react-router-dom';
import {useState} from 'react';

import IconStarFilled from '../assets/icon-star-filled.svg'
import IconStarEmpty from '../assets/icon-star-empty.svg'

import styled from 'styled-components'
import '../styles/theme.css'

function StarredItem({className, to, children, preStarred}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledItem className={className}>
      <StyledIcon 
        onClick={() => setIsActive(!isActive)}
        src={isActive ? IconStarFilled : IconStarEmpty}
      />
      <StyledLink to={to}>
        <StyledTitle>{children}</StyledTitle>
        <StyledDescription>
          This is where a brief description would be. Not sure if this is necessary or not.
        </StyledDescription>
      </StyledLink>
    </StyledItem>
  )
}

const StyledItem = styled('div')`
  display: flex;
  gap: var(--space-sm);
`;

const StyledIcon = styled('img')`
  width: var(--space-lg);
  height: var(--space-lg);
  cursor: pointer;
  padding: var(--space-xs);
`;

const StyledLink = styled(NavLink)`
  color: var(--purple100);
  text-decoration: none;
`;

const StyledTitle = styled('h4')`
  color: var(--white);
`;

const StyledDescription = styled('p')`
  opacity: 0.5;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 1.0;
    transition: all 250ms ease-in-out;
  }
`;

export default StarredItem;