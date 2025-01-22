import Link from '../components/link'

import styled from 'styled-components'
import '../styles/theme.css'

function Transactions() {
  const headers = ['Transaction', 'Duration', 'Error Rate', 'Score', 'Count', 'Impact']
  const data = [
    { name: '/transaction 00', duration: '325.23ms', rate: '0.17%', score: '93', count: '13.1k', impact: 'High'},
    { name: '/transaction 01', duration: '834.19ms', rate: '0.94%', score: '94', count: '9.3k', impact: 'High'},
    { name: '/transaction 02', duration: '237.32ms', rate: '0.01%', score: '96', count: '7.5k', impact: 'High'},
    { name: '/transaction 03', duration: '312.41ms', rate: '0.67%', score: '98', count: '6.8k', impact: 'Med'},
    { name: '/transaction 04', duration: '185.63ms', rate: '0.49%', score: '87', count: '877', impact: 'Med'},
    { name: '/transaction 05', duration: '238.34ms', rate: '0.02%', score: '99', count: '498', impact: 'Med'},
    { name: '/transaction 06', duration: '197.82ms', rate: '0.02%', score: '91', count: '341', impact: 'Med'},
    { name: '/transaction 07', duration: '952.08ms', rate: '0.01%', score: '92', count: '78', impact: 'Low'},
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
                <Cell>{object.duration}</Cell>
                <Cell>{object.rate}</Cell>
                <Cell>{object.score}</Cell>
                <Cell>{object.count}</Cell>
                <Cell>{object.impact}</Cell>
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

  &:not(:first-child) {
    text-align: right;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--gray400);
  border-bottom: 2px solid var(--gray200);
`;

export default Transactions