import Link from '../components/link'
import Radio from '../components/radio'

import styled from 'styled-components'
import '../styles/theme.css'

function AppList() {
  const headers = ['App Team', 'Owner', 'Members', 'Services']
  const data = [
    { status: true, name: 'Peated Web', owner: '@cramer', access: '1', services: '3'},
    { status: false, name: 'Peated Mobile', owner: '@cramer', access: '2', services: '2'},
    { status: false, name: 'Peated Platform', owner: '@cramer', access: '2', services: '1'},
    { status: false, name: 'Peated Docs', owner: '@cramer', access: '1', services: '1'},
  ];
  
  return (
    <StyledContainer>
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
                    {object.status === true ? <Radio isChecked/> : <Radio/>}<Link>{object.name}</Link>
                  </RadioCell>
                </Cell>
                <Cell>{object.owner}</Cell>
                <Cell>{object.access}</Cell>
                <Cell>{object.services}</Cell>
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

  &:nth-child(3) {
    text-align: right;
  }

  &:last-child {
    text-align: right;
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

export default AppList