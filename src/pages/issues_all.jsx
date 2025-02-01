import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Issues from '../layouts/table_issues'
import FilterBar from '../layouts/filterBar'

import Widget from '../components/widget'
import Lines from '../components/lines'

import styled from 'styled-components'

function AllIssues() {
  const dataA = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
      {
        data: [12, 13, 12, 14, 12, 13, 14, 16, 18, 20, 24, 32, 36],
        borderColor: ['#b82abe']
      },
      {
        data: [4, 5, 4, 5, 6, 5, 4, 4, 5, 5, 5, 6, 4],
        borderColor: ['#595175']
      },
      {
        data: [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1],
        borderColor: ['#837AA3']
      }
    ]
  };

  return (
    <Main>
      <Header title='All Issues'/>
      <Body>
        <FilterBar placeholder='Filter events...'/>
        <GridStyles>
          <IssueCount title='Overall Issue Count'>
            <StyledLines data={dataA} />
          </IssueCount>
          <RecentlyViewed title='Recently Viewed'/>
          <AssignedToMe title='Assigned to Me'/>
          <StyledIssues />
        </GridStyles>
      </Body>
    </Main>
  )
}

const GridStyles = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  grid-template-rows: repeat(3, auto);
  gap: var(--space-unit);
`;

const StyledIssues = styled(Issues)`
  grid-column: 1/3;
`;

const StyledLines = styled(Lines)`
  height: auto;
`;

const IssueCount = styled(Widget)`
  grid-column: 1/2;
  grid-row: 1/3;
`;

const RecentlyViewed = styled(Widget)`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const AssignedToMe = styled(Widget)`
  grid-column: 2/3;
  grid-row: 2/3;
`;

export default AllIssues