import styled from 'styled-components'
import '../styles/theme.css'

const Tag = ({className, children}) => (
  <TagStyles className={className}>
    {children}
  </TagStyles>
);

const TagStyles = styled('div')`
  display: block;
  border-radius: var(--radius);
  font-size: 10px;
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--pink200);
  color: var(--pink200);
`;

export default Tag;
