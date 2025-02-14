import Link from '../components/link'

import styled from 'styled-components'

function ExampleList({data}) {  
  return (
    <StyledTable>
      <tbody>
        {data.map((object, index) => {
          return (
            <tr key={index}>
              <Cell>
                <Link>{object.name}</Link>
                <TinyFont>{object.description}</TinyFont>
              </Cell>
              <Cell>
                {object.value}
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

const TinyFont = styled('div')`
  font-size: 0.7em;
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