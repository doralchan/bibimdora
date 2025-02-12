import Link from '../components/link'

import styled from 'styled-components'

function TransactionsList({className}) {
  const data = [
    { name: '/example/00', duration: '35.23ms'},
    { name: '/example/01', duration: '84.19ms'},
    { name: '/example/02', duration: '27.32ms'},
  ];
  
  return (
    <StyledTable>
      <tbody>
        {data.map((object, index) => {
          return (
            <tr key={index}>
              <Cell><Link>{object.name}</Link></Cell>
              <Cell>{object.duration}</Cell>
            </tr>
          );
        })
        }
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled('table')`
  width: 100%;
  margin-top: var(--space-xs);
  border-collapse: collapse;

  tr:last-child td {
    border-bottom-color: transparent;
  }
`;

const Cell = styled('td')`
  border-bottom: 1px solid var(--dark500);
  padding: var(--space-sm) var(--space-md);

  &:not(:first-child) {
    text-align: right;
  }
`;

export default TransactionsList