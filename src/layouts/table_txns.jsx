import Link from '../components/link'
import Table from '../components/table'

import styled from 'styled-components'

function Transactions({className}) {
  const headers = ['[Transaction Name]', 'Duration', 'Error Rate', 'Score', 'Count', 'Time Spent']
  const data = [
    { name: '/route/page/screen/endpoint/00', duration: '35.23ms', rate: '0.1%', score: '93', count: '13.1k', timeSpent: 'High' },
    { name: '/route/page/screen/endpoint/01', duration: '84.19ms', rate: '0.9%', score: '94', count: '9.3k', timeSpent: 'High' },
    { name: '/route/page/screen/endpoint/02', duration: '27.32ms', rate: '0.1%', score: '96', count: '7.5k', timeSpent: 'High' },
    { name: '/route/page/screen/endpoint/03', duration: '32.41ms', rate: '0.3%', score: '98', count: '6.8k', timeSpent: 'Med' },
    { name: '/route/page/screen/endpoint/04', duration: '15.63ms', rate: '0.4%', score: '87', count: '877', timeSpent: 'Med' },
    { name: '/route/page/screen/endpoint/05', duration: '28.34ms', rate: '0.2%', score: '99', count: '498', timeSpent: 'Med' },
    { name: '/route/page/screen/endpoint/06', duration: '17.82ms', rate: '0.2%', score: '91', count: '341', timeSpent: 'Med' },
    { name: '/route/page/screen/endpoint/07', duration: '92.08ms', rate: '0.1%', score: '92', count: '78', timeSpent: 'Low' },
    { name: '/route/page/screen/endpoint/08', duration: '15.63ms', rate: '0.4%', score: '87', count: '877', timeSpent: 'Med' },
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
              <Cell><Link>{object.name}</Link></Cell>
              <Cell>{object.duration}</Cell>
              <Cell>{object.rate}</Cell>
              <Cell>{object.score}</Cell>
              <Cell>{object.count}</Cell>
              <Cell>{object.timeSpent}</Cell>
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

  &:not(:first-child) {
    text-align: right;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--purple100);
  border-bottom: 3px solid var(--dark500);
`;

export default Transactions