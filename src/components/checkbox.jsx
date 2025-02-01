import styled from 'styled-components'
import '../styles/theme.css'

const Checkbox = ({className, defaultChecked, name, onChange}) => (
  <InputStyles 
    className={className} 
    defaultChecked={defaultChecked}
    onChange={onChange}
    name={name}
    type='checkbox'
  />
);

const InputStyles = styled('input')`
  appearance: none;
  margin: 0;
  width: 16px;
  height: 16px;
  border: 1px solid var(--gray300);
  border-radius: var(--radius);
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 2px;
  }

  &:checked::after {
    background-color: var(--purple200);
  }
`;

export default Checkbox;
