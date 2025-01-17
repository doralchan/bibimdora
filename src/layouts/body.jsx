import styled from 'styled-components'
import '../styles/theme.css'

const Body = ({className, children}) => (
    <BodyStyles className={className}>
      {children}
    </BodyStyles>
  );
  
  const BodyStyles = styled('div')`
    background: var(--gray100);
    padding: var(--space-lg) var(--space-xl);
    grid-column: 2/3;
    z-index: ;
  `;

export default Body;
