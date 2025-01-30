import Dropdown from '../components/dropdown'
import PatternDotsLight from '../assets/pattern-dots-light.svg'
import PatternDotsDark from '../assets/pattern-dots-dark.svg'

import styled from 'styled-components'

function Subnavigation({className, children, subtitle, defaultValue, onChange}) {
  const AppOptions = [
    { value: 'web', label: 'Peated Web' },
    { value: 'mobile', label: 'Peated Mobile' },
    { value: 'platform', label: 'Platform' },
    { value: 'admin', label: 'Admin-Portal' },
  ]

  return (
    <SubnavigationStyles className={className}>
      <HeaderStyles>
        <Dropdown 
          defaultValue={defaultValue || AppOptions[0]} 
          options={AppOptions} 
          onChange={onChange} />
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

const SubtitleStyles = styled('h4')`
  margin-top: var(--space-xs);
  color: var(--pink300);
`;

const ListStyles = styled('div')`
  grid-row: 2/3;
`;

export default Subnavigation;