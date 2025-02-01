import Link from '../components/link'
import Logo from '../components/logo'
import Checkbox from '../components/checkbox'

import NodeLogo from '../assets/logo-node.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'
import Ongoing from '../assets/minibars-ongoing.svg'
import New from '../assets/minibars-new.svg' 
import Escalating1 from '../assets/minibars-escalating-1.svg' 
import Escalating2 from '../assets/minibars-escalating-2.svg' 
import Regression from '../assets/minibars-regression.svg' 

import styled from 'styled-components'
import '../styles/theme.css'

function Issues() {
  const headers = ['Issue', 'Graph', 'Events', 'Users', 'Assignee']
  const data = [
    {
      level:'warning', title: 'Hydration Error', culprit: 'Server rendered HTML didnt match client', project: NextJSLogo, location: 'https://peated.engineering',
      trend: Ongoing, status: 'Ongoing', max: '539', events: '1.2k', users: '821', assignee: '1',
    },
    {
      level:'default', title: 'Error', culprit: 'Text content does not match server-rendered HTML', project: NextJSLogo, location: 'https://peated.engineering',
      trend: Escalating1, status: 'Escalating', max: '3', events: '93', users: '17', assignee: '1',
    },
    {
      level:'info', title: 'Object.captureException', culprit: 'Exceeded timeout of 5000ms for a test', project: NodeLogo, location: 'Object?(autofixSteps.spec.tsx',
      trend: New, status: 'New', max: '129', events: '2.3k', users: '1.2k', assignee: '1',
    },
    {
      level:'fatal', title: 'TypeError', culprit: '(0, _reactDOM.findDOMNode) is not a function', project: NodeLogo, location: 'getCellMeasurementRequirements(react)',
      trend: Regression, status: 'Regressing', max: '2', events: '40', users: '29', assignee: '1',
    },
    {
      level:'default', title: 'Error', culprit: 'There was an error while hydrating but React was...', project: NextJSLogo, location: 'https://peated.engineering',
      trend: Escalating2, status: 'Escalating', max: '65', events: '462', users: '23', assignee: '1',
    },
  ];
  
  return (
    <StyledContainer>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((object) => {
              return (<HeaderCell key={object.issue}>{object}</HeaderCell>);
            })
            }
          </tr>
        </thead>
        <tbody>
          {data.map((object) => {
            return (
              <tr key={object.id}>
                <Cell>
                  <MainIssue>
                    <Checkbox />
                    <PrimaryIssueRow>
                      <Link>{object.title}</Link>
                      <div>{object.culprit}</div>
                    </PrimaryIssueRow>
                    <SecondaryIssueRow>
                      <StyledProject>
                        <StyledLogo src={object.project} />
                        <span>{object.project === NextJSLogo ? '@peated/web' : '@peated/worker'}</span>
                      </StyledProject>|
                      <StyledLocation>{object.location}</StyledLocation>
                    </SecondaryIssueRow>
                  </MainIssue>
                </Cell>
                <Cell>
                  <ChartFont>{object.max}</ChartFont>
                  <div><img src={object.trend} alt='minibar chart' /></div>
                  <TinyFont>{object.status}</TinyFont>
                </Cell>
                <Cell>{object.events}</Cell>
                <Cell>{object.users}</Cell>
                <Cell>{object.assignee}</Cell>
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
  background-color: var(--dark200);
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  border-radius: var(--radius);
`;

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

const Cell = styled('td')`
  border-bottom: 1px solid var(--dark500);
  padding: var(--space-sm) var(--space-md);
  text-align: right;
  position: relative;

  &:first-child,
  &:nth-child(2) {
    text-align: left;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--purple100);
  border-bottom: 3px solid var(--dark500);
`;

const SmallFont = styled('div')`
  font-size: 0.9em;
`;

const TinyFont = styled('div')`
  font-size: 0.8em;
`;

const ChartFont = styled(TinyFont)`
  position: absolute;
  border-top: 1px dotted var(--purple100);
  width: 100%;
  text-align: right;
  color: var(--purple100);
`;

const MainIssue = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: var(--space-md);
`;

const PrimaryIssueRow = styled('div')`
  display: flex;
  gap: var(--space-unit);
  grid-column: 2/3;
`;

const SecondaryIssueRow = styled('div')`
  display: flex;
  gap: var(--space-unit);
  grid-column: 2/3;
`;

const StyledProject = styled(SmallFont)`
  display: flex;
  color: var(--purple100);
  gap: var(--space-xs);
`;

const StyledLogo = styled(Logo)`
  width: var(--space-md);
`;

const StyledLocation = styled(SmallFont)`
  color: var(--purple100);
`;

export default Issues