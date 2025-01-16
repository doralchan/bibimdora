import FormSelect from './select'

import styled from 'styled-components'
import '../styles/theme.css'

function Filter({ defaultSelection }) {
  const ProjectOptions = [
    { value: 'PeatJS, WhiskyFetch, ServerPy', label: 'PeatJS, WhiskyFetch, ServerPy'}, //0
    { value: 'PeatJS,', label: 'PeatJS'}, //1
    { value: 'WhiskyFetch', label: 'WhiskyFetch'}, //2
    { value: 'ServerPy', label: 'ServerPy'}, //3
    { value: 'WhiskyFetch, ServerPy', label: 'WhiskyFetch, ServerPy'} //4
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
