import styled from 'styled-components'
import '../styles/theme.css'

const Button = ({className, children}) => (
  <ButtonStyles className={className}>
    {children}
  </ButtonStyles>
);

const ButtonStyles = styled('a')`
  display: inline-block;
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  background: var(--purple300);
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 500;
  padding: var(--space-xs) var(--space-md);
  color: var(--white);
`;

export default Button;
