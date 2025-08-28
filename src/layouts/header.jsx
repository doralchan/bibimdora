import Button from '../components/button'
import Logo from '../components/logo'

import styled from 'styled-components'
import '../styles/theme.css'

const Header = ({className, children, title, cta, logo}) => (
    <HeaderStyles className={className}>
      <TitleStyles>
        {logo ? <StyledLogo src={logo} /> : null}
        <h2>{title}</h2>
      </TitleStyles>
      {cta ? <ActionStyles><Button priority>{cta}</Button></ActionStyles> : null}
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
    display: flex;
  `;

  const StyledLogo = styled(Logo)`
    height: 25px;
    margin-right: var(--space-md);
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
