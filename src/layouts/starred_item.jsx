import IconStarFilled from '../assets/icon-star-filled.svg'

import styled from 'styled-components'
import '../styles/theme.css'

const StarredItem = ({className, defaultStarred, onChange, children}) => (
  <StyledItem
    onChange={onChange} 
    defaultStarred={defaultStarred} 
    className={className}>
    <StyledIcon src={IconStarFilled} />
    <p>{children}</p>
  </StyledItem>
);

const StyledItem = styled('div')`
  display: flex;
`;

const StyledIcon = styled('img')`
  width: var(--space-lg);
  height: var(--space-lg);
`;

export default StarredItem;