import {useState} from 'react'
import Radio from '../components/radio'
import Icon from '../components/icon'

import IconEdit from '../assets/icon-edit.svg'

import styled from 'styled-components'

function AppList({className}) {
  const [selected, setSelect] = useState(true);
  const handleChange = e => {
    const {value} = e.target
    setSelect(value)
  }

  const headers = ['App Team', 'Owner', 'Members', 'Services', 'Manage']
  const data = [
    { status: true, name: 'Peated Web', owner: '@cramer', access: '1', services: '3'},
    { status: false, name: 'Peated Mobile', owner: '@cramer', access: '2', services: '2'},
    { status: false, name: 'Platform', owner: '@cramer', access: '2', services: '1'},
    { status: false, name: 'Admin-Portal', owner: '@cramer', access: '1', services: '2'},
  ];

  return (
    <StyledContainer className={className}>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((object) => {
              return (
                <HeaderCell key={object.id}>{object}</HeaderCell>
              );
            })
            }
          </tr>
        </thead>
        <tbody>
          {data.map((object) => {
            return (
              <tr key={object.id}>
                <Cell>
                  <RadioCell>
                    <Radio onChange={handleChange} name='app' defaultChecked={object.status === true} />
                    {object.name}
                  </RadioCell>
                </Cell>
                <Cell>{object.owner}</Cell>
                <Cell>{object.access}</Cell>
                <Cell>{object.services}</Cell>
                <Cell><StyledIcon src={IconEdit} /></Cell>
              </tr>
            );
          })
          }
        </tbody>
      </StyledTable>    
    </StyledContainer>
  );
};

const StyledContainer = styled('div')`
  background-color: var(--white);
  border: 1px solid var(--gray200);
  border-bottom-width: 2px;
  border-radius: var(--radius);
  height: fit-content;
`;

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

const Cell = styled('td')`
  border-bottom: 1px solid var(--gray200);
  padding: var(--space-sm) var(--space-md);
  text-align: right;

  &:first-child,
  &:nth-child(2) {
    text-align: left;
  }
`;

const RadioCell = styled('div')`
  display: inline-flex;
  gap: var(--space-sm);
  vertical-align: bottom;
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--gray400);
  border-bottom: 2px solid var(--gray200);
`;

const StyledIcon = styled(Icon)`
  float: right;
`;

export default AppList