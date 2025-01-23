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

const DropdownStyles = styled(Select)`
  .react-select__control {
    font-size: 1.2em;
    font-weight: 700;
    min-height: fit-content;
    caret-color: transparent;
  }

  .react-select__menu {
    background-color: var(--white);
    padding: var(--space-sm);
    border: 1px solid var(--gray200);
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