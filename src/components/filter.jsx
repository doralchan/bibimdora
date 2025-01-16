import FormSelect from './select'

import styled from 'styled-components'
import '../styles/theme.css'

function Filter({ defaultSelection }) {
  const ProjectOptions = [
    { value: 'foodfight, project', label: 'foodfight, project' }, //0
    { value: 'foodfight', label: 'foodfight' }, //1
    { value: 'project', label: 'project' }, //2
    { value: 'admin-portal, help-center', label: 'admin-portal, help-center' }, //3
    { value: 'admin-portal', label: 'admin-portal' }, //4
    { value: 'help-center', label: 'help-center' }, //5
    { value: 'vendors, recs, payments', label: 'vendors, recs, payments' }, //6
    { value: 'vendors', label: 'vendors' }, //7
    { value: 'recs', label: 'recs' }, //8
    { value: 'payments', label: 'payments' }, //9
    { value: 'foodfightiOS, foodfightDroid', label: 'foodfightiOS, foodfightDroid' }, //10
    { value: 'foodfightiOS', label: 'foodfightiOS' }, //11
    { value: 'foodfightDroid', label: 'foodfightDroid' }, //12
    { value: 'NextJS, Go, Python', label: 'NextJS, Go, Python'}, //13
    { value: 'NextJS', label: 'NextJS'}, //14
    { value: 'Go', label: 'Go'}, //15
    { value: 'Python', label: 'Python'}, //16
    { value: 'Go, Python', label: 'Go, Python'} //17
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
