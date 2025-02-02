import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Issues from '../layouts/table_issues'
import FilterBar from '../layouts/filterBar'

import Widget from '../components/widget'
import Lines from '../components/lines'
import Comment from '../components/comment'

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
        data: [5, 6, 5, 5, 6, 6, 5, 6, 8, 8, 9, 10, 9],
        borderColor: ['#595175']
      },
      {
        data: [4, 5, 4, 5, 6, 5, 4, 4, 5, 5, 5, 6, 4],
        borderColor: ['#837AA3']
      },
      {
        data: [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 1, 2, 1],
        borderColor: ['#ACA3D1']
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
          <Distribution title='Service Level Distribution'>
            Stacked Bar Chart
          </Distribution>
          <RecentActivity title='Recent Activity'>
            <Comment member='Sean' number='123'>This happens because of x, y and z. I'll fix this in the next release.</Comment>
            <Comment member='Brett' number='456'>Can someone fix this please?</Comment>
            <Comment member='Liam' number='789'>Urgent! I need help fixing this before the next deploy goes out.</Comment>
            <Comment member='Cassidy' number='123'>A lot of these are due to the recent outage at Twilio. We'll need to keep an eye on it.</Comment>
          </RecentActivity>
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


  @media (min-width: 1281px) {
    grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(25%, 100px);
  }
`;

const StyledIssues = styled(Issues)`
  grid-column: 1/3;
`;

const IssueCount = styled(Widget)`

  @media (min-width: 1281px) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
`;

const Distribution = styled(Widget)`

  @media (min-width: 1281px) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
`;

const RecentActivity = styled(Widget)`
  grid-column: 1/3;
  grid-row: 3/4;

  @media (min-width: 1281px) {
    grid-column: 3/4;
    grid-row: 1/4;
  }
`;

const StyledLines = styled(Lines)`
  height: auto;
`;


export default AllIssues