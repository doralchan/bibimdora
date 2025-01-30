import styled from 'styled-components'
import '../styles/theme.css'

const Body = ({className, children}) => (
    <BodyStyles className={className}>
      {children}
    </BodyStyles>
  );
  
  const BodyStyles = styled('div')`
    background: var(--dark300);
    padding: var(--space-lg) var(--space-xl);
    grid-column: 2/3;
  `;

export default Body;
