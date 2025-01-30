import Link from '../components/link'
import Icon from '../components/icon'
import IconEdit from '../assets/icon-edit.svg'

import styled from 'styled-components'

function AppList({className}) {
  const headers = ['Your App Teams', 'Owner', 'Members', 'Services', 'Last Viewed', 'Your Access']
  const data = [
    { status: true, name: 'Peated Web', owner: '@cramer', members: '1', access: true, services: '3', lastviewed:'Today' },
    { status: false, name: 'Peated Mobile', owner: '@cramer', members: '2', access: true, services: '2', lastviewed:'1/23/2025' },
    { status: false, name: 'Platform', owner: '@cramer', members: '2', access: true, services: '1', lastviewed:'1/2/2025' },
    { status: false, name: 'Admin-Portal', owner: '@cramer', members: '1', access: true, services: '2', lastviewed:'1/15/2025' },
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
                <Cell>{object.name}</Cell>
                <Cell>{object.owner}</Cell>
                <Cell>{object.members}</Cell>
                <Cell>{object.services}</Cell>
                <Cell>{object.lastviewed}</Cell>
                <Cell>
                  <Link>{object.access === true ? <StyledIcon src={IconEdit} /> : 'Request Access'}</Link>
                </Cell>
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
  background-color: var(--dark200);
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  border-radius: var(--radius);
  height: fit-content;
`;

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

const Cell = styled('td')`
  border-bottom: 1px solid var(--dark500);
  padding: var(--space-sm) var(--space-md);
  text-align: right;

  &:first-child,
  &:nth-child(2) {
    text-align: left;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--purple100);
  border-bottom: 3px solid var(--dark500);
`;

const StyledIcon = styled(Icon)`
  float: right;
`;

export default AppList