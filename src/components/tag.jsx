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
  padding: 2px var(--space-xs);
  color: var(--white);
  background-color: rgba(180, 80, 188, 0.5);
`;

export default Tag;
