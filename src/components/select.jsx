import Select from 'react-select'
import styled from 'styled-components'
import '../styles/theme.css'

const FormSelect = ({className, defaultValue, options}) => (
  <SelectStyles
    className={className}
    classNamePrefix='react-select'
    defaultValue={defaultValue}
    options={options}
  />
);

const SelectStyles = styled(Select)`
  .react-select__control {
    border-bottom-width: 3px;
    background-color: var(--dark200);
    border-color: var(--dark500);
    min-height: 28px;
    min-width: 60px;
  }

  .react-select__control:hover {
    border-color: var(--dark500);
  }

  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    border-color: var(--purple300);
    box-shadow: none;
  }

  .react-select__control,
  .react-select__menu {
    padding: 0 var(--space-sm);
  }

  .react-select__menu {
    background-color: var(--dark200);
    border: 1px solid var(--dark500);
  }

  .react-select__single-value {
    color: var(--white);
    font-weight: 500;
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__dropdown-indicator {
    padding: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__option--is-selected {
    background-color: var(--pink300);
    color: var(--white);
  }

  .react-select__option:hover,
  .react-select__option:focus {
    background-color: var(--pink200);
  }
`;

export default FormSelect;