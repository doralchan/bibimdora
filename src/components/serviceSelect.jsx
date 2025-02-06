import Select, {components} from 'react-select'
import Checkbox from '../components/checkbox'

import styled from 'styled-components'
import '../styles/theme.css'

function ServiceSelect ({className, onChange}) {

  const serviceOptions = [
    {
      label: 'Teams/Groups',
      options: [
        { value: 'My Services', label: 'My Services', checkbox: false }, //0
        { value: 'Peated Web', label: 'Peated Web', checkbox: false }, //1
        { value: 'Peated Mobile', label: 'Peated Mobile', checkbox: false }, //2
        { value: 'Platform', label: 'Platform', checkbox: false }, //3
        { value: 'Vanguard', label: 'Vanguard', checkbox: false }, //4
      ]
    },
    {
      label: 'Relevant Services',
      options: [
        { value: '@peated/web', label: '@peated/web', checkbox: true }, //5
        { value: '@peated/iOS', label: '@peated/iOS', checkbox: true }, //6
        { value: '@peated/server', label: '@peated/server', checkbox: true }, //7
        { value: '@peated/worker', label: '@peated/worker', checkbox: true }, //8
      ]
    }
  ]

  const CustomOption = (props) => {
    return (
      <components.Option {...props}>
        {props.data.checkbox === true ? <Checkbox /> : null}
        {props.data.label}
      </components.Option>
    )
  }

  return (
    <DropdownStyles
      className={className}
      classNamePrefix='react-select'
      defaultValue={serviceOptions[0].options[0]}
      onChange={onChange}
      options={serviceOptions}
      components={{Option: CustomOption}}
      unstyled
    />
  )
}

const DropdownStyles = styled(Select)`
  .react-select__control {
    font-weight: 500;
    min-height: 29px;
    caret-color: transparent;
    cursor: pointer;
    background-color: var(--dark200);
    border: 1px solid var(--dark500);
    border-bottom-width: 3px;
    padding: 0 var(--space-sm);
  }

  .react-select__menu {
    background-color: var(--dark200);
    padding: var(--space-sm);
    border: 1px solid var(--dark500);
    border-radius: var(--radius);
    min-width: 250px;
    margin-top: var(--space-unit);
  }

  .react-select__menu-list {
    max-height: fit-content;
  }

  .react-select__group-heading {
    padding: var(--space-sm) var(--space-sm);
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 500;
    color: var(--purple100);
    letter-spacing: 0.01em;
  }

  .react-select__option {
    padding: var(--space-sm) var(--space-sm);
    display: flex;
    align-items: center;
    gap: var(--space-unit);
    cursor: pointer;
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

export default ServiceSelect;