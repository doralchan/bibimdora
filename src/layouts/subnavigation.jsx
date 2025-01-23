import Dropdown from '../components/dropdown'
import PatternDots from '../assets/pattern-dots.svg'

import styled from 'styled-components'

function Subnavigation({className, children, subtitle}) {
  const AppOptions = [
    { value: 'web', label: 'Peated Web' },
    { value: 'mobile', label: 'Peated Mobile' },
    { value: 'infra', label: 'Infra Team' },
    { value: 'docs', label: 'Docs Team' },
  ]

  return (
    <SubnavigationStyles className={className}>
      <HeaderStyles>
        <Dropdown defaultValue={AppOptions[0]} options={AppOptions} />
        <SubtitleStyles>{subtitle}</SubtitleStyles>
      </HeaderStyles>
      <ListStyles>{children}</ListStyles>
    </SubnavigationStyles>
  )
}

const SubnavigationStyles = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  background-image: url(${PatternDots});
  background-color: var(--gray100);
  background-repeat: space;
  grid-column: 1/2;
  padding: var(--space-lg) var(--space-lg);
  border-right: 1px solid var(--gray200);
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