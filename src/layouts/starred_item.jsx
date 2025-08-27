import IconStarFilled from '../assets/icon-star-filled.svg'
import IconStarEmpty from '../assets/icon-star-empty.svg'

import styled from 'styled-components'
import '../styles/theme.css'

const StarredItem = ({className, defaultStarred, onChange, children}) => (
  <StyledItem
    onChange={onChange} 
    defaultStarred={defaultStarred} 
    className={className}>
    <StyledIcon src={IconStarEmpty} />
    <p>{children}</p>
  </StyledItem>
);

const StyledItem = styled('div')`
  display: flex;
  gap: var(--space-sm);
  cursor: pointer;
  color: var(--purple100);
  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    color: var(--purple200);
  }
`;

const StyledIcon = styled('img')`
  width: var(--space-lg);
  height: var(--space-lg);
  opacity: 0.2;
`;

export default StarredItem;