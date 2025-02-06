import FormSelect from './select'
import ServiceSelect from './serviceSelect'

import styled from 'styled-components'
import '../styles/theme.css'

function Filter({ isServicePage }) {
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
      { isServicePage ? null : <ServiceSelect /> }
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

const EnvFormSelect = styled(FormSelect)`
  .react-select__control {
    border-radius: ${props => props.isServicePage ? 'var(--radius) 0 0 var(--radius)' : '0'};
  }
`;

const DateFormSelect = styled(FormSelect)`
  .react-select__control {
    border-left: 0;
    border-radius: 0 var(--radius) var(--radius) 0;
  }
`;


export default Filter;
