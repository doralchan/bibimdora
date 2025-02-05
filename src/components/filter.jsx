import FormSelect from './select'

import styled from 'styled-components'
import '../styles/theme.css'

function Filter({ defaultSelection }) {
  const ProjectOptions = [
    { value: 'My Services', label: 'My Services'}, //0
    { value: 'Peated Web', label: 'Peated Web'}, //1
    { value: 'Peated Mobile', label: 'Peated Mobile'}, //2
    { value: 'Platform', label: 'Platform'}, //3
    { value: '@peated/web', label: '@peated/web'}, //4
    { value: '@peated/iOS', label: '@peated/iOS'}, //5
    { value: '@peated/server', label: '@peated/server'}, //6
    { value: '@peated/worker', label: '@peated/worker'}, //7
  ]

  const EnvOptions = [
    { value: 'all', label: 'All Env' },
    { value: 'prod', label: 'prod' },
    { value: 'stag', label: 'stag' },
  ]

  const DateOptions = [
    { value: '24h', label: '24h' },
    { value: '14d', label: '14d' },
  ]
  
  return (
    <FilterStyles>
      <ProjectFormSelect defaultValue={defaultSelection ? ProjectOptions[defaultSelection] : ProjectOptions[0]} options={ProjectOptions} />
      <EnvFormSelect 
        defaultValue={EnvOptions[0]}
        options={EnvOptions}
      />
      <DateFormSelect 
        defaultValue={DateOptions[0]}
        options={DateOptions}
      />
    </FilterStyles>
  )
}

const FilterStyles = styled('div')`
  display: flex;
`;

const ProjectFormSelect = styled(FormSelect)`
  .react-select__control {
    border-right: 0;
    border-radius: var(--radius) 0 0 var(--radius);
  }
`;

const EnvFormSelect = styled(FormSelect)`
  .react-select__control {
    border-radius: 0;
  }
`;

const DateFormSelect = styled(FormSelect)`
  .react-select__control {
    border-left: 0;
    border-radius: 0 var(--radius) var(--radius) 0;
  }
`;


export default Filter;
