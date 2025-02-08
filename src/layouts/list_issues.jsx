import Link from '../components/link'
import Logo from '../components/logo'
import Table from '../components/table'

import NodeLogo from '../assets/logo-node.svg'
import NextJSLogo from '../assets/logo-nextjs.svg'

import styled from 'styled-components'

function IssuesList({className}) {
  const headers = ['Top Issues']
  const data = [
    {level:'warning', title: 'Hydration Error', culprit: 'Server rendered HTML didnt match client', project: NextJSLogo, location: 'https://peated.engineering'},
    {level:'default', title: 'Error', culprit: 'Text content does not match server-rendered HTML', project: NextJSLogo, location: 'https://peated.engineering'},
    {level:'info', title: 'Object.captureException', culprit: 'Exceeded timeout of 5000ms for a', project: NodeLogo, location: 'Object?(autofixSteps.spec.tsx'},
    {level:'fatal', title: 'TypeError', culprit: '(0, _reactDOM.findDOMNode) is not a function', project: NodeLogo, location: 'getCellMeasurementRequirements(react)'},
    {level:'default', title: 'Error', culprit: 'There was an error while hydrating but React was', project: NextJSLogo, location: 'https://peated.engineering'},
  ];
  
  return (
    <Table className={className}>
      <thead>
        <tr>
          {headers.map((object, index) => {
            return (<HeaderCell key={index}>{object}</HeaderCell>);
          })
          }
        </tr>
      </thead>
      <tbody>
        {data.map((object, index) => {
          return (
            <tr key={index}>
              <Cell>
                <PrimaryIssueRow>
                  <Link>{object.title}</Link>
                  <div>{object.culprit}</div>
                </PrimaryIssueRow>
                <SecondaryIssueRow>
                  <LevelDot $level={object.level}/>
                  <StyledProject>
                    <StyledLogo src={object.project} />
                    <span>{object.project === NextJSLogo ? '@peated/web' : '@peated/worker'}</span>
                  </StyledProject>|
                  <StyledLocation>{object.location}</StyledLocation>
                </SecondaryIssueRow>
              </Cell>
            </tr>
          );
        })
        }
      </tbody>
    </Table>    
  );
};

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

const PrimaryIssueRow = styled('div')`
  display: flex;
  gap: var(--space-unit);
  grid-column: 2/3;
  overflow: hidden;
  white-space: nowrap;
`;

const SecondaryIssueRow = styled('div')`
  display: flex;
  gap: var(--space-unit);
  grid-column: 2/3;
  align-items: center;
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

const LevelDot = styled('div')`
  height: var(--space-unit);
  width: var(--space-unit);
  background-color: 
    ${
        props => 
        props.$level === 'default' ? '#EE8019' : 
        props.$level === 'fatal' ? '#F02F35' :
        props.$level === 'warning' ? '#FDB81B' :
        '#226DFC'
      };
  border-radius: 50%;
`;

export default IssuesList