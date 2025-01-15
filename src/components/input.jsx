import styled from 'styled-components'
import '../styles/theme.css'

const Input = ({className, value, placeholder}) => (
  <InputStyles className={className} placeholder={placeholder} value={value} type='text' />
);

const InputStyles = styled('input')`
  display: block;
  border: 1px solid var(--gray200);
  border-bottom-width: 3px;
  border-radius: var(--radius);
  padding: var(--space-xs) var(--space-md);

  &:focus {
    outline: none;
    border-color: var(--purple100);
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

export default Input;
