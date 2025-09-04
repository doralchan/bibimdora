import Tag from '../components/tag'
import Icon from '../components/icon'
import Table from '../components/table'

import IconStarFilled from '../assets/icon-star-filled.svg'

import styled from 'styled-components'

function MyDashboardsList({className}) {
  const headers = ['Star', 'Name', 'Owner', 'Projects', 'Tags', 'Last Viewed']
  const data = [
    { name: '@peated/web', owner: 'user_name', projects: '1', lastviewed:'Today', domain:'frontend' },
    { name: '@peated/iOS', owner: 'user_name', projects: '2', lastviewed:'1/23/2025', domain:'mobile' },
    { name: '@peated/server', owner: 'user_name', projects: '2', lastviewed:'1/2/2025', domain:'backend' },
    { name: '@peated/worker', owner: 'user_name', projects: '2', lastviewed:'10/28/2024', domain:'backend' },
    { name: '@peated/API', owner: 'user_name', projects: '2', lastviewed:'12/25/2023', domain:'frontend' },
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
              <Cell><Icon src={IconStarFilled} /></Cell>
              <Cell>{object.name}</Cell>
              <Cell>{object.owner}</Cell>
              <Cell>{object.projects}</Cell>
              <Cell>
                <TagSet>
                  <Tag>{object.domain}</Tag>
                  <Tag>web</Tag>
                  <Tag>project</Tag>
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

export default MyDashboardsList