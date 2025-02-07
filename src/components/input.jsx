import styled from 'styled-components'
import '../styles/theme.css'

const Input = ({className, value, placeholder}) => (
  <InputStyles className={className} placeholder={placeholder} value={value} type='text' />
);

const InputStyles = styled('input')`
  display: block;
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  border-radius: var(--radius);
  padding: var(--space-xs) var(--space-md);
  background-color: var(--dark200);
  flex-grow: 1;

  &:focus {
    outline: none;
    border-color: var(--purple300);
  }

  &::placeholder {
    color: var(--purple100);
  }
`;

export default Input;
