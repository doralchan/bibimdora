import Link from '../components/link'
import Icon from '../components/icon'
import Table from '../components/table'

import styled from 'styled-components'

function OtherList({className}) {
  const headers = ['Other Service Groups', 'Owner', 'Members', 'Services', 'Last Viewed', 'Access']
  const data = [
    { name: 'Side Project', owner: '@dora', members: '1', access: true, services: '1', lastviewed:'Today' },
    { name: 'Prototype', owner: '@dora', members: '1', access: true, services: '1', lastviewed:'1/23/2025' },
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
                <Link>Request Access</Link>
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

export default OtherList