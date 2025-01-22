import Link from '../components/link'

import styled from 'styled-components'
import '../styles/theme.css'

function Apps() {
  const headers = ['App', 'Owner', 'Access', 'Services']
  const data = [
    { name: 'Peated Web', owner: '@cramer', access: '1 member', services: '3'},
    { name: 'Peated Mobile', owner: '@cramer', access: '2 members', services: '2'},
    { name: 'Infra Mode', owner: '@cramer', access: '2 members', services: '5'},
    { name: 'Docs Mode', owner: '@cramer', access: '1 member', services: '1'},
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
                <Cell><Link>{object.name}</Link></Cell>
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
`;

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

const Cell = styled('td')`
  border-bottom: 1px solid var(--gray200);
  padding: var(--space-sm) var(--space-md);

  &:last-child {
    text-align: right;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--gray400);
  border-bottom: 2px solid var(--gray200);
`;

export default Apps