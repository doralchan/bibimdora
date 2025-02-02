import styled from 'styled-components'

function Table({className, children}) {
  return (
    <StyledContainer className={className}>
      <StyledTable>
        {children}
      </StyledTable>    
    </StyledContainer>
  );
};

const StyledContainer = styled('div')`
  background-color: var(--dark200);
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  border-radius: var(--radius);
`;

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

export default Table