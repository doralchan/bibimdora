import Select, {components} from 'react-select'

import IconStar from '../assets/icon-star.svg'

import Icon from '../components/icon'
import Button from '../components/button'
import Checkbox from '../components/checkbox'
import Input from '../components/input'

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

  const MenuList = (props) => {
    return (
      <components.MenuList {...props}>
        <MenuHeader>
          <Input placeholder='Search Services...' />
        </MenuHeader>
        {props.children}
        <MenuFooter>
          <Button>View All Services</Button>
          <Button priority>Apply</Button>
        </MenuFooter>
      </components.MenuList>
    )
  }
  
  const CustomOption = (props) => {
    return (
      <components.Option {...props}>
        {props.data.checkbox === true ? <Checkbox defaultChecked={true} /> : null}
        {props.data.label}
        {props.data.checkbox === true ? <StyledIcon src={IconStar} /> : null}
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
      components={{MenuList, Option: CustomOption}}
      unstyled
    />
  )
}

const StyledIcon = styled(Icon)`
  justify-self: right;
`;

const MenuHeader = styled('div')`
  display: flex;
  padding: var(--space-md);
  border-bottom: 1px solid var(--dark500);
`;

const MenuFooter = styled('div')`
  padding: var(--space-md);
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--dark500);
  margin-top: var(--space-lg);
`;

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
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .react-select__menu {
    background-color: var(--dark200);
    border: 1px solid var(--dark500);
    border-radius: var(--radius);
    min-width: 250px;
    margin-top: var(--space-unit);
    box-shadow: 0px 3px 0px 0px var(--black);
  }

  .react-select__menu-list {
    max-height: fit-content;
  }

  .react-select__group-heading {
    padding: var(--space-sm);
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 500;
    color: var(--purple100);
    letter-spacing: 0.01em;
  }

  .react-select__group {
    padding: var(--space-md) var(--space-md) 0 var(--space-md);
  }

  .react-select__option {
    padding: var(--space-sm) var(--space-sm);
    display: grid;
    grid-template-columns: auto auto 1fr;
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