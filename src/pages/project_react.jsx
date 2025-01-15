import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import Tabnavigation from '../layouts/tabnavigation'
import TabnavItem from '../layouts/tabnavitem'

import FilterBar from '../components/filterBar'

function ProjectReact() {
  return (
    <Main>
      <Header title='Frontend'>
        <Tabnavigation>
          <TabnavItem>Overview</TabnavItem>
          <TabnavItem>Web Vitals</TabnavItem>
          <TabnavItem>UI</TabnavItem> 
          <TabnavItem>Assets</TabnavItem>
          <TabnavItem>Network Requests</TabnavItem>
          <TabnavItem>Releases</TabnavItem>
        </Tabnavigation> 
      </Header>
      <Body>
        <FilterBar defaultSelection='5' />
      </Body>
    </Main>
  )
}

export default ProjectReact