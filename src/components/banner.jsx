import Button from '../components/button'
import styled from 'styled-components'
import '../styles/theme.css'

const Banner = ({className, children, title, description, primary, secondary}) => (
  <StyledBanner className={className}>
    <MainContent>
      <h1>{title}</h1>
      <Description>{description}</Description>
      <Actions>
        <Button priority>{primary}</Button>
        <Button>{secondary}</Button>
      </Actions>
    </MainContent>
    {children}
  </StyledBanner>
);

const StyledBanner = styled('div')`
  background-color: var(--dark200);
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  padding: var(--space-lg) 8%;
  border-radius: var(--radius);
  position: relative;
  min-height: 40vh;
  display: flex;
  align-items: center;
`;

const Description = styled('p')`
  color: var(--purple100);
  margin-bottom: var(--space-sm);
`;

const Actions = styled('div')`
  display: inline-flex;
  gap: var(--space-unit);
`;

const MainContent = styled('div')`
  display: flex;
  flex-direction: column;
  gap: var(--space-unit);
  width: 50%;
  max-width: 800px;
`;

export default Banner;
