import Button from '../components/button'

import styled from 'styled-components'
import '../styles/theme.css'

const Header = ({className, children, title, cta}) => (
    <HeaderStyles className={className}>
      <TitleStyles><h2>{title}</h2></TitleStyles>
      {cta ? <ActionStyles><Button>{cta}</Button></ActionStyles> : null}
      <TabStyles>{children}</TabStyles>
    </HeaderStyles>
  );
  
  const HeaderStyles = styled('div')`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    background: var(--dark200);
    border-bottom: 2px solid var(--dark500);
    padding: var(--space-lg) var(--space-xl) var(--space-lg) var(--space-xl);
    grid-column: 2/3;
  `;

  const TitleStyles = styled('div')`
    grid-column: 1/2;
  `;

  const ActionStyles = styled('div')`
    grid-column: 2/3;
    grid-row: 1/3;
  `;

  const TabStyles = styled('div')`
    grid-column: 1/3;
    grid-row: 2/3;
  `;


export default Header;
