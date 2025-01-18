import Icon from '../components/icon'
import IconChevron from '../assets/icon-chevron.svg'
import PatternDots from '../assets/pattern-dots.svg'

import styled from 'styled-components'

function Subnavigation({className, children, title, subtitle}) {
  const hasDropdown = <Icon src={IconChevron} />

  return (
    <SubnavigationStyles className={className}>
      <HeaderStyles>
        <TitleStyles>
          {title} {subtitle ? hasDropdown : null}
        </TitleStyles>
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

const TitleStyles = styled('h3')`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  justify-content: space-between;
`;

const SubtitleStyles = styled('h4')`
  margin-top: var(--space-xs);
  color: var(--pink300);
`;

const ListStyles = styled('div')`
  grid-row: 2/3;
`;

export default Subnavigation;