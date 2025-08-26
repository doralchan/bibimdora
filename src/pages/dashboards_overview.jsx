import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Card from '../layouts/card'

import Banner from '../components/banner'
import HeroImage from '../assets/hero-image-1.png'

import styled from 'styled-components'

function DashboardsOverview() {
  return (
    <Main>
      <Header title='Overview'/>
      <Body>
        <Banner 
          title='New AI Agent Monitoring' 
          description='Aubergine bamboo bitterleaf bok bologi bona bush cabbage catsear caulie cauliflower chard chestnut chickpea chickweed choy coriander.'
          primary='Setup Now'
          secondary='Read Docs'
        >
          <StyledHero src={HeroImage} alt='' />
        </Banner>
        <Section>
          <h3>Recently Viewed</h3>
          <GridPreview>
            <Card title='@peated/iOS' description='MM/DD/YY' />
            <Card title='custom_dash_1' description='MM/DD/YY' />
          </GridPreview>
        </Section>
        <Section>
          <h3>Most Viewed By Team</h3>
          <GridPreview>
            <Card title='mobile_vitals' description='MM/DD/YY' />
            <Card title='@peated/iOS' description='MM/DD/YY' />
            <Card title='custom_dash_3' description='MM/DD/YY' />
            <Card title='outbound_requests' description='MM/DD/YY' />
          </GridPreview>
        </Section>
        <Section>
          <h3>Recommended</h3>
          <ListPreview>
            [Starred Items]
          </ListPreview>
        </Section>
      </Body>
    </Main>
  )
}

const StyledHero = styled('img')`
  position: absolute;
  right: 10%;
  width: 38%;
  max-width: 300px;
`;

const Section = styled('div')`
  padding-top: var(--space-lg);
`;

const GridPreview = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: var(--space-sm);
  gap: var(--space-md);
`;

const ListPreview = styled('div')`
  padding-top: var(--space-sm);
  color: var(--purple100);
`;

export default DashboardsOverview