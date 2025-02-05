import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Transactions from '../layouts/table_txns'
import FilterBar from '../layouts/filterBar'

import Widget from '../components/widget'
import Donut from '../components/donut'
import Bars from '../components/bars'
import Lines from '../components/lines'

import styled from 'styled-components'

function Overview() {
  const dataA = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [1.2, 1.3, 1.2, 1.4, 1.2, 1.3, 1.4, 1.6, 1.8, 2, 1.9, 2, 1.9],
      borderColor: ['#4E2A9A']
    }]
  };
  
  const dataB = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [200, 203, 202, 200, 221, 202, 203, 200, 201, 203, 202, 201, 200],
      borderColor: ['#4E2A9A']
    }]
  };
  
  const dataC = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [120, 121, 123, 119, 290, 285, 292, 120, 121, 120, 119, 121, 121],
      borderColor: ['#4E2A9A']
    }]
  };

  const dataD = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [120, 121, 123, 119, 120, 130, 124, 120, 121, 120, 119, 121, 121],
      borderColor: ['#A737B4']
    }, 
    {
      data: [200, 203, 202, 200, 201, 202, 203, 200, 201, 503, 942, 901, 1000],
      borderColor: ['#FDB81B']
    }]
  };
  
  const dataE = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [2.3, 2.2, 2.2, 2.4, 2.1, 2.2, 2.4, 2.2, 2.3, 2.4, 1.2, 2.3, 2.4],
      borderColor: ['#A737B4'],
    },
    {
      data: [2, 2.3, 2.2, 2, 2.1, 2.2, 2.3, 2, 2.1, 2.3, 2.4, 2.1, 2.3],
      borderColor: ['#FDB81B']
    }]
  };
  
  const dataF = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [2.2, 2.3, 2.3, 2.4, 2.2, 2.1, 2.3, 2.1, 2.2, 2.5, 2.3, 2.2, 2.3],
      borderColor: ['#A737B4'],
    },
    {
      data: [2.2, 2.3, 2.3, 2.4, 3.2, 8.1, 5.3, 2.1, 2.2, 2.5, 2.3, 2.2, 2.3],
      borderColor: ['#FDB81B'],
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
            <Bars />
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
          <WidgetTable>
            <Transactions />
          </WidgetTable>
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
    grid-column: 1/4;
    grid-row: 1/2;
  }
`;

const WidgetThroughput = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 4/7;
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

const WidgetTable = styled('div')`

  @media (min-width: 992px) {
    grid-column: 1/7;
    grid-row: 4/5;
  }
`;

export default Overview