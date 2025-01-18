import Widget from '../components/widget'
import Donut from '../components/donut'
import Bars from '../components/bars'

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
      <WidgetA title='Slowest A' />
      <WidgetB title='Slowest B' />
      <WidgetC title='Slowest C' />
      <WidgetD title='Worst X' />
      <WidgetE title='Worst Y' />
      <WidgetF title='Worst Z' />
      <WidgetIssues title='Transactions' />
    </GridStyles>
  );
  
const GridStyles = styled('div')`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 2fr 1fr 1fr 1fr;
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

const WidgetIssues = styled(Widget)`
  grid-column: 1/7;
  grid-row: 4/5;
`;

export default Widgets;
