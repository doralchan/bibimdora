import Link from '../components/link'

import styled from 'styled-components'

function ExampleList() {
  const data = [
    { name: '/example/00', duration: 'XX.X%'},
    { name: '/example/01', duration: 'XX.X%'},
    { name: '/example/02', duration: 'XX.X%'},
  ];
  
  return (
    <StyledTable>
      <tbody>
        {data.map((object, index) => {
          return (
            <tr key={index}>
              <Cell>
                <Link>{object.name}</Link>
                <SmallFont>Context Description</SmallFont>
              </Cell>
              <Cell>
                {object.duration}
              </Cell>
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

const SmallFont = styled('div')`
  font-size: 0.9em;
  color: var(--purple100);
`;

const Cell = styled('td')`
  border-bottom: 1px solid var(--dark500);
  padding: var(--space-sm) 0;

  &:not(:first-child) {
    text-align: right;
  }
`;

export default ExampleList