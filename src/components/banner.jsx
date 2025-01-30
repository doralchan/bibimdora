import Button from '../components/button'
import styled from 'styled-components'
import '../styles/theme.css'

const Banner = ({className, children, title, description, primary, secondary}) => (
  <StyledBanner className={className}>
    {children}
    <MainContent>
      <h1>{title}</h1>
      <Description>{description}</Description>
      <Actions>
        <Button>{primary}</Button>
        <StyledButton>{secondary}</StyledButton>
      </Actions>
    </MainContent>
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
  justify-content: flex-end;
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
  max-width: 500px;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
`;

export default Banner;
