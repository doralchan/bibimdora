import styled from 'styled-components'
import '../styles/theme.css'

function Issues() {
  const headers = ['Type', 'Issue', 'Location', 'Status', 'Culprit']
  const data = [
    { type: 'error', issue: 'APIError', location: '/transaction/location', status:'fatal', culprit: 'message' },
  ];
  
  return (
    <StyledContainer>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((object) => {
              return (
                <HeaderCell key={object.issue}>{object}</HeaderCell>
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
                  <div>{object.type}</div>
                  <div>{object.issue}{object.location}</div>
                  <div>{object.status}{object.culprit}</div>
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
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--gray400);
  border-bottom: 2px solid var(--gray200);
`;

export default Issues