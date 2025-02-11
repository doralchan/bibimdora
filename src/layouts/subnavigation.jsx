import PatternDotsDark from '../assets/pattern-dots-dark.svg'

import styled from 'styled-components'

function Subnavigation({className, children, subtitle, defaultValue, onChange}) {
  return (
    <SubnavigationStyles className={className}>
      <HeaderStyles>
        <TitleStyles>Organization</TitleStyles>
        <SubtitleStyles>{subtitle}</SubtitleStyles>
      </HeaderStyles>
      <ListStyles>{children}</ListStyles>
    </SubnavigationStyles>
  )
}

const SubnavigationStyles = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  background-image: url(${PatternDotsDark});
  background-color: var(--dark300);
  grid-column: 1/2;
  padding: var(--space-lg) var(--space-lg);
  border-right: 2px solid var(--dark500);
  gap: var(--space-lg);
`;

const HeaderStyles = styled('div')`
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  margin: 0 var(--space-md);
`;

const TitleStyles = styled('h3')`
  margin-bottom: 1px;
`;

const SubtitleStyles = styled('h4')`
  margin-bottom: var(--space-sm);
  color: var(--pink200);
`;

const ListStyles = styled('div')`
  grid-row: 2/3;
`;

export default Subnavigation;