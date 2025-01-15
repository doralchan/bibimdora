import styled from 'styled-components'

const Tabnavigation = ({children}) => (
  <TabnavigationStyles>
    {children}
  </TabnavigationStyles>
);

const TabnavigationStyles = styled('div')`
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
`;

export default Tabnavigation;