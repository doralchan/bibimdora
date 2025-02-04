import Link from '../components/link'
import Icon from '../components/icon'
import Table from '../components/table'

import IconEdit from '../assets/icon-edit.svg'

import styled from 'styled-components'

function AppList({className}) {
  const headers = ['Your Service Groups', 'Owner', 'Members', 'Services', 'Last Viewed', 'Access']
  const data = [
    { name: 'Peated Web', owner: '@cramer', members: '1', access: true, services: '3', lastviewed:'Today' },
    { name: 'Peated Mobile', owner: '@cramer', members: '2', access: true, services: '2', lastviewed:'1/23/2025' },
    { name: 'Platform', owner: '@cramer', members: '2', access: true, services: '1', lastviewed:'1/2/2025' },
    { name: 'Vanguard', owner: '@cramer', members: '1', access: true, services: '2', lastviewed:'1/15/2025' },
  ];

  return (
    <Table className={className}>
      <thead>
        <tr>
          {headers.map((object, index) => {
            return (
              <HeaderCell key={index}>{object}</HeaderCell>
            );
          })
          }
        </tr>
      </thead>
      <tbody>
        {data.map((object, index) => {
          return (
            <tr key={index}>
              <Cell>{object.name}</Cell>
              <Cell>{object.owner}</Cell>
              <Cell>{object.members}</Cell>
              <Cell>{object.services}</Cell>
              <Cell>{object.lastviewed}</Cell>
              <Cell>
                <Link><StyledIcon src={IconEdit} /></Link>
              </Cell>
            </tr>
          );
        })
        }
      </tbody>
    </Table>    
  );
};

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