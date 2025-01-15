import Select from 'react-select'
import styled from 'styled-components'
import '../styles/theme.css'

const Dropdown = ({className, defaultValue, options}) => (
  <DropdownStyles
    className={className}
    classNamePrefix='react-select'
    defaultValue={defaultValue}
    options={options}
    unstyled
  />
);

const DropdownStyles = styled(Select)``;

export default Dropdown;