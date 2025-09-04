import Tag from '../components/tag'
import Icon from '../components/icon'
import Table from '../components/table'

import IconStarEmpty from '../assets/icon-star-empty.svg'
import IconStarFilled from '../assets/icon-star-filled.svg'

import styled from 'styled-components'

function OtherDashboardsList({className}) {
  const headers = ['Star', 'Name', 'Owner', 'Projects', 'Tags', 'Last Viewed']
  const data = [
    { starred: true, name: 'Web Vitals', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'frontend' },
    { starred: true, name: 'Queries', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'backend' },
    { starred: false, name: 'Network Requests', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'frontend' },
    { starred: false, name: 'Assets', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'frontend' },
    { starred: false, name: 'Outbound API Requests', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'backend' },
    { starred: false, name: 'Caches', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'backend' },
    { starred: false, name: 'Queues', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'backend' },
    { starred: false, name: 'Mobile Vitals', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'mobile' },
    { starred: false, name: 'All Projects', owner: 'sentry', projects: 'all', lastviewed:'Today', domain:'projects' },
  ];

  return (
    <Table className={className}>
      <thead>
        <tr>
          {headers.map((object, index) => {
            return (
              <HeaderCell key={index}>{object}</HeaderCell>
            );
          })
          }
        </tr>
      </thead>
      <tbody>
        {data.map((object, index) => {
          return (
            <tr key={index}>
              <Cell>{(object.starred === true) ? <Icon src={IconStarFilled} /> : <Icon src={IconStarEmpty} />}</Cell>
              <Cell>{object.name}</Cell>
              <Cell>{object.owner}</Cell>
              <Cell>{object.projects}</Cell>
              <Cell>
                <TagSet>
                  <Tag>{object.domain}</Tag>
                  <Tag>web</Tag>
                  <Tag>module</Tag>
                </TagSet>
              </Cell>
              <Cell>{object.lastviewed}</Cell>
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

  &:first-child {
    text-align: center;
    width: var(--space-lg);
  }

  &:nth-child(2) {
    width: 20%;
  }

  &:nth-child(3) {
    width: 10%;
  }

  &:nth-child(5) {
    width: 40%;
  }

  &:last-child {
    text-align: right;
  }
`;

const HeaderCell = styled(Cell)`
  font-weight: 500;
  font-size: 0.9em;
  color: var(--purple100);
  border-bottom: 3px solid var(--dark500);
`;

const TagSet = styled('div')`
  display: flex;
  gap: var(--space-sm);
`;

export default OtherDashboardsList