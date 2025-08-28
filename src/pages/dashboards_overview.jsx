import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Card from '../layouts/card'
import StarredItem from '../layouts/starred_item'

import Banner from '../components/banner'
import HeroImage from '../assets/hero-image-1.png'
import DashPreview1 from '../assets/dash-preview-1.svg'
import DashPreview2 from '../assets/dash-preview-2.svg'
import DashPreview3 from '../assets/dash-preview-3.svg'
import DashPreview4 from '../assets/dash-preview-4.svg'
import DashPreview5 from '../assets/dash-preview-5.svg'

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
            <Card title='@peated/iOS' description='MM/DD/YY'><DashPreview src={DashPreview1}/></Card>
            <Card title='custom_dash_1' description='MM/DD/YY'><DashPreview src={DashPreview2}/></Card>
          </GridPreview>
        </Section>
        <Section>
          <h3>Most Viewed</h3>
          <GridPreview>
            <Card title='mobile_vitals' description='MM/DD/YY'><DashPreview src={DashPreview3}/></Card>
            <Card title='@peated/iOS' description='MM/DD/YY'><DashPreview src={DashPreview4}/></Card>
            <Card title='custom_dash_3' description='MM/DD/YY'><DashPreview src={DashPreview5}/></Card>
            <Card title='outbound_requests' description='MM/DD/YY'><DashPreview src={DashPreview1}/></Card>
          </GridPreview>
        </Section>
        <Section>
          <h3>Recommended</h3>
          <ListPreview>
            <StarredItem>Web Vitals</StarredItem>
            <StarredItem>Network Requests</StarredItem>
            <StarredItem>Assets</StarredItem>
            <StarredItem>Queries</StarredItem>
            <StarredItem>Outbound API Requests</StarredItem>
            <StarredItem>Caches</StarredItem>
            <StarredItem>Queues</StarredItem>
            <StarredItem>Mobile Vitals</StarredItem>
            <StarredItem>Dashboard Template</StarredItem>
            <StarredItem>Dashboard Template</StarredItem>
            <StarredItem>Dashboard Template</StarredItem>
            <StarredItem>Dashboard Template</StarredItem>
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
  padding-top: var(--space-md);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: var(--space-sm);
`;

const DashPreview = styled('img')`
  max-width: 50%;
  padding: var(--space-lg);
`;

export default DashboardsOverview