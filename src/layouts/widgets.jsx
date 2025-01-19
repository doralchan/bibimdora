import Widget from '../components/widget'
import Donut from '../components/donut'
import Bars from '../components/bars'
import Table from '../components/table'

import styled from 'styled-components'
import '../styles/theme.css'

const Widgets = ({className}) => (
    <GridStyles className={className}>
      <WidgetScore title='Score'>
        <Donut />
      </WidgetScore>
      <WidgetThroughput title='Throughput'>
        <Bars />
      </WidgetThroughput>
      <WidgetA title='Metric A' />
      <WidgetB title='Metric B' />
      <WidgetC title='Metric C' />
      <WidgetD title='Metric X' />
      <WidgetE title='Metric Y' />
      <WidgetF title='Metric Z' />
      <WidgetTable>
        <Table />
      </WidgetTable>
    </GridStyles>
  );
  
const GridStyles = styled('div')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: var(--space-unit);
`;

const WidgetScore = styled(Widget)`
  grid-column: 1/4;
  grid-row: 1/2;
`;

const WidgetThroughput = styled(Widget)`
  grid-column: 4/7;
  grid-row: 1/2;
`;

const WidgetA = styled(Widget)`
  grid-column: 1/3;
  grid-row: 2/3;
`;

const WidgetB = styled(Widget)`
  grid-column: 3/5;
  grid-row: 2/3;
`;

const WidgetC = styled(Widget)`
  grid-column: 5/7;
  grid-row: 2/3;
`;

const WidgetD = styled(Widget)`
  grid-column: 1/3;
  grid-row: 3/4;
`;

const WidgetE = styled(Widget)`
  grid-column: 3/5;
  grid-row: 3/4;
`;

const WidgetF = styled(Widget)`
  grid-column: 5/7;
  grid-row: 3/4;
`;

const WidgetTable = styled('div')`
  grid-column: 1/7;
  grid-row: 4/5;
`;

export default Widgets;
