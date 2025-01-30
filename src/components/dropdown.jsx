import Select from 'react-select'
import styled from 'styled-components'
import '../styles/theme.css'

const Dropdown = ({className, defaultValue, onChange, options}) => (
  <DropdownStyles
    className={className}
    classNamePrefix='react-select'
    defaultValue={defaultValue}
    onChange={onChange}
    options={options}
    unstyled
  />
);

const DropdownStyles = styled(Select)`
  .react-select__control {
    font-size: 1.2em;
    font-weight: 700;
    min-height: fit-content;
    caret-color: transparent;
    cursor: pointer;
  }

  .react-select__menu {
    background-color: var(--dark200);
    padding: var(--space-sm);
    border: 1px solid var(--dark500);
    border-radius: var(--radius);
  }

  .react-select__option {
    padding: var(--space-xs) var(--space-sm);
  }

  .react-select__option:hover {
    background-color: var(--pink300);
    color: var(--white);
  }

`;

export default Dropdown;