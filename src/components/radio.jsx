import styled from 'styled-components'
import '../styles/theme.css'

const Radio = ({className, value, isChecked}) => (
  <InputStyles className={className} value={value} defaultChecked={isChecked} type='radio' />
);

const InputStyles = styled('input')`
  margin: 0 auto;
  width: 100%;
`;

export default Radio;
