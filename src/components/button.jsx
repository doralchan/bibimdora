import styled from 'styled-components'
import '../styles/theme.css'

const Button = ({className, children, priority}) => (
  <ButtonStyles className={className} priority={priority}>
    {children}
  </ButtonStyles>
);

const ButtonStyles = styled('a')`
  display: inline-block;
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  background: ${props => props.priority ? 'var(--purple300)' : 'transparent'};
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 500;
  padding: var(--space-xs) var(--space-md);
  color: var(--white);
`;

export default Button;
