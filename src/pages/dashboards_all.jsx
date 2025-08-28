import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import MyDashboardsList from '../layouts/table_mydashboards'
import OtherDashboardsList from '../layouts/table_otherdashboards'

import styled from 'styled-components'
import '../styles/theme.css'

function AllDashboards() {
  return (
    <Main>
      <Header title='All Dashboards' cta='Create Dashboard'/>
      <Body>
        <Section>
          <SectionHeader>Created by Me</SectionHeader>
          <MyDashboardsList/>
        </Section>
        <Section>
          <SectionHeader>Created by Others</SectionHeader>
          <OtherDashboardsList/>
        </Section>
      </Body>
    </Main>
  )
}

const Section = styled('div')`
  padding-bottom: var(--space-lg);
`;

const SectionHeader = styled('h3')`
  margin-bottom: var(--space-md);
`;

export default AllDashboards