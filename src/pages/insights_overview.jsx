import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Transactions from '../layouts/table_txns'
import IssuesList from '../layouts/list_issues'
import FilterBar from '../layouts/filterBar'

import Widget from '../components/widget'
import Donut from '../components/donut'
import BarsLines from '../components/bars_lines'
import Lines from '../components/lines'

import styled from 'styled-components'

function InsightsOverview() {
  const dataA = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [1.2, 1.3, 1.2, 1.4, 1.2, 1.3, 1.4, 1.6, 1.8, 2, 1.9, 2, 1.9],
      borderColor: ['#423C58']
    }]
  };
  
  const dataB = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [200, 203, 202, 200, 221, 202, 203, 200, 201, 203, 202, 201, 200],
      borderColor: ['#423C58']
    }]
  };
  
  const dataC = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [120, 121, 123, 119, 290, 285, 292, 120, 121, 120, 119, 121, 121],
      borderColor: ['#423C58']
    }]
  };

  const dataD = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [120, 121, 123, 119, 120, 130, 124, 120, 121, 120, 119, 121, 121],
      borderColor: ['#423C58']
    }, 
    {
      data: [200, 203, 202, 200, 201, 202, 203, 200, 201, 503, 942, 901, 1000],
      borderColor: ['#837AA3']
    }]
  };
  
  const dataE = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [2.3, 2.2, 2.2, 2.4, 2.1, 2.2, 2.4, 2.2, 2.3, 2.4, 1.2, 2.3, 2.4],
      borderColor: ['#423C58'],
    },
    {
      data: [2, 2.3, 2.2, 2, 2.1, 2.2, 2.3, 2, 2.1, 2.3, 2.4, 2.1, 2.3],
      borderColor: ['#837AA3']
    }]
  };
  
  const dataF = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [2.2, 2.3, 2.3, 2.4, 2.2, 2.1, 2.3, 2.1, 2.2, 2.5, 2.3, 2.2, 2.3],
      borderColor: ['#423C58'],
    },
    {
      data: [2.2, 2.3, 2.3, 2.4, 3.2, 8.1, 5.3, 2.1, 2.2, 2.5, 2.3, 2.2, 2.3],
      borderColor: ['#837AA3'],
    }]
  }

  return (
    <Main>
      <Header title='Overview'/>
      <Body>
        <FilterBar />
        <GridStyles>
          <WidgetScore title='Score'>
            <Donut />
          </WidgetScore>
          <WidgetThroughput title='Throughput'>
            <BarsLines />
          </WidgetThroughput>
          <WidgetA title='Metric A'>
            <Lines data={dataA} />
          </WidgetA>
          <WidgetB title='Metric B'>
            <Lines data={dataB} />
          </WidgetB>
          <WidgetC title='Metric C'>
            <Lines data={dataC} />
          </WidgetC>
          <WidgetD title='Metric D'>
            <Lines data={dataD} />
          </WidgetD>
          <WidgetE title='Metric E'>
            <Lines data={dataE} />
          </WidgetE>
          <WidgetF title='Metric F'>
            <Lines data={dataF} />
          </WidgetF>
          <WidgetTransactions>
            <StyledTransactions />
          </WidgetTransactions>
          <WidgetList>
            <StyledIssuesList />
          </WidgetList>
        </GridStyles>
      </Body>
    </Main>
  )
}

const GridStyles = styled('div')`
  display: flex;
  flex-direction: column;
  gap: var(--space-unit);

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(6, minmax(0,1fr));
    grid-template-rows: repeat(3, auto);
  }
`;

const WidgetScore = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 1/3;
  }
`;

const WidgetThroughput = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 3/7;
    grid-row: 1/2;
  }

`;

const WidgetA = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  @media (min-width: 1800px) {
    grid-column: 1/2;
  }
`;

const WidgetB = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 3/5;
    grid-row: 2/3;
  }

  @media (min-width: 1800px) {
    grid-column: 2/3;
  }
`;

const WidgetC = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 5/7;
    grid-row: 2/3;
  }

  @media (min-width: 1800px) {
    grid-column: 3/4;
  }
`;

const WidgetD = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 1/3;
    grid-row: 3/4;
  }

  @media (min-width: 1800px) {
    grid-column: 4/5;
    grid-row: 2/3;
  }
`;

const WidgetE = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 3/5;
    grid-row: 3/4;
  }

  @media (min-width: 1800px) {
    grid-column: 5/6;
    grid-row: 2/3;
  }
`;

const WidgetF = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 5/7;
    grid-row: 3/4;
  }

  @media (min-width: 1800px) {
    grid-column: 6/7;
    grid-row: 2/3;
  }
`;

const WidgetTransactions = styled('div')`
  overflow: hidden;

  @media (min-width: 992px) {
    grid-column: 1/4;
    grid-row: 4/5;
  }
`;

const WidgetList = styled('div')`
  overflow: hidden;

  @media (min-width: 992px) {
    grid-column: 4/7;
    grid-row: 4/5;
  }
`;

const StyledIssuesList = styled(IssuesList)`
  height: 100%;
`;

const StyledTransactions = styled(Transactions)`
  height: 100%;
`;

export default InsightsOverview