import styled from 'styled-components'
import '../styles/theme.css'

const Body = ({className, children}) => (
    <BodyStyles className={className}>
      {children}
    </BodyStyles>
  );
  
  const BodyStyles = styled('div')`
    background-color: var(--white);
    // opacity: 1;
    // background-image:  linear-gradient(#f9f7f7 1px, transparent 1px), linear-gradient(to right, #f9f7f7 1px, #ffffff 1px);
    // background-size: 20px 20px;
    padding: var(--space-lg) var(--space-xl);
    grid-column: 2/3;
    z-index: ;
  `;

export default Body;
