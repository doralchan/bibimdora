import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import TransactionList from '../layouts/list_transactions'
import IssuesList from '../layouts/list_issues'
import ExampleList from '../layouts/list_examples'
import FilterBar from '../layouts/filterBar'

import Widget from '../components/widget'
import BarsLines from '../components/bars_lines'
import Lines from '../components/lines'

import LaravelLogo from '../assets/logo-laravel.svg'

import styled from 'styled-components'

function InsightsProjectAPI() {
  const dataDuration = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
    {
      data: [120, 121, 123, 119, 120, 130, 124, 120, 121, 120, 119, 121, 121],
      borderColor: ['#FDB81B']
    }, 
    {
      data: [200, 203, 202, 200, 201, 202, 203, 200, 201, 503, 942, 901, 1000],
      borderColor: ['#EE8019']
    }]
  };

  const dataQueries = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [1.2, 1.3, 1.2, 1.4, 1.2, 1.3, 1.4, 1.6, 1.8, 2, 1.9, 2, 1.9],
      borderColor: ['#837AA3']
    }]
  };

  const examplesQueries = [
    { name: 'SELECT database.billing WHERE...', description: 'context/description', value: 'XXXmx'},
    { name: 'UPDATE database.billing WHERE...', description: 'context/description', value: 'XXXms'},
    { name: 'DELETE database.billing WHERE...', description: 'context/description', value: 'XXXms'},
  ];
  
  const dataQueues = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [
      {
        data: [2, 2.3, 2.2, 2, 2.1, 2.2, 2.3, 2, 2.1, 2.3, 2.4, 2.1, 2.3],
        borderColor: ['#837AA3']
      },
      {
        data: [2.3, 2.2, 2.2, 2.4, 2.1, 2.2, 2.4, 2.2, 2.3, 2.4, 1.2, 2.3, 2.4],
        borderColor: ['#423C58'],
      }
    ]
  };

  const examplesQueues = [
    { name: 'default', description: 'context/description', value: 'XXXms'},
    { name: 'email', description: 'context/description', value: 'XXXms'},
    { name: 'outbox', description: 'context/description', value: 'XXXms'},
  ];
  
  const dataCaches = {
    labels: ['X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X', 'X/X'],
    datasets: [{
      data: [2.2, 2.3, 2.3, 2.4, 2.2, 2.1, 2.3, 2.1, 2.2, 2.5, 2.3, 2.2, 2.3],
      borderColor: ['#837AA3'],
    }]
  }

  const examplesCaches = [
    { name: 'Job Key 1', description: 'context/description', value: 'XX.X%'},
    { name: 'Job Key 2', description: 'context/description', value: 'XX.X%'},
    { name: 'Job Key 3', description: 'context/description', value: 'XX.X%'},
  ];

  return (
    <Main>
      <Header title='@peated/API' logo={LaravelLogo} />
      <Body>
        <FilterBar isServicePage />
        <GridStyles>
          <WidgetThroughput title='Throughput Requests v. Errors'>
            <BarsLines />
          </WidgetThroughput>
          <WidgetDuration title='Duration (P50, P95)'>
            <Lines data={dataDuration} />
          </WidgetDuration>
          <WidgetIssueList>
            <StyledIssuesList />
          </WidgetIssueList>
          <WidgetQueries title='Top Queries'>
            <Lines data={dataQueries} />
            <ExampleList data={examplesQueries} />
          </WidgetQueries>
          <WidgetQueues title='Top Queue Destinations'>
            <Lines data={dataQueues} />
            <ExampleList data={examplesQueues} />
          </WidgetQueues>
          <WidgetCaches title='Top Cache Hit Rates'>
            <Lines data={dataCaches} />
            <ExampleList data={examplesCaches} />
          </WidgetCaches>
          <WidgetTransactions>
            <TransactionList />
          </WidgetTransactions>
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


const WidgetThroughput = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 1/4;
    grid-row: 1/2;
  }
`;

const WidgetDuration = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 1/4;
    grid-row: 2/3;
  }
`;

const WidgetIssueList = styled('div')`

  @media (min-width: 992px) {
    grid-column: 4/7;
    grid-row: 1/3;
  }
`;

const StyledIssuesList = styled(IssuesList)`
  overflow: hidden;

  @media (min-width: 992px) {
    padding-bottom: var(--space-lg);
  }
`;

const WidgetQueries = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 1/3;
    grid-row: 3/4;
    padding-bottom: 0;
  }
`;

const WidgetQueues = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 3/5;
    grid-row: 3/4;
    padding-bottom: 0;
  }
`;

const WidgetCaches = styled(Widget)`

  @media (min-width: 992px) {
    grid-column: 5/7;
    grid-row: 3/4;
    padding-bottom: 0;
  }
`;

const WidgetTransactions = styled('div')`
  overflow: hidden;

  @media (min-width: 992px) {
    grid-column: 1/7;
    grid-row: 4/5;
  }
`;

export default InsightsProjectAPI