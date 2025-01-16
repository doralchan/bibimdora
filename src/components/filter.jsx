import FormSelect from './select'

import styled from 'styled-components'
import '../styles/theme.css'

function Filter({ defaultSelection }) {
  const ProjectOptions = [
    { value: '@peated/web, server, worker', label: '@peated/web, server, worker'}, //0
    { value: '@peated/web,', label: '@peated/web'}, //1
    { value: 'server', label: 'server'}, //2
    { value: 'worker', label: 'worker'}, //3
    { value: 'server, worker', label: 'server, worker'} //4
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
