import styled from 'styled-components'
import '../styles/theme.css'

const Radio = ({className, defaultChecked, name, onChange}) => (
  <InputStyles 
    className={className} 
    defaultChecked={defaultChecked}
    onChange={onChange}
    name={name}
    type='radio'
  />
);

const InputStyles = styled('input')`
  appearance: none;
  margin: 0;
  width: 16px;
  height: 16px;
  border: 1px solid var(--gray300);
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 2px;
  }

  &:checked::after {
    background-color: var(--purple200);
  }
`;

export default Radio;
