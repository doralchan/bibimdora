import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import Tabnavigation from '../layouts/tabnavigation'
import TabnavItem from '../layouts/tabnavitem'

import FilterBar from '../components/filterBar'

function ProjectRedis() {
  return (
    <Main>
      <Header title='Backend'>
        <Tabnavigation>
          <TabnavItem>Overview</TabnavItem>
          <TabnavItem>Queries</TabnavItem>
          <TabnavItem>Outbound Requests</TabnavItem> 
          <TabnavItem>Caches</TabnavItem>
          <TabnavItem>Queues</TabnavItem> 
          <TabnavItem>Crons</TabnavItem>
          <TabnavItem>Uptime</TabnavItem>
          <TabnavItem>Releases</TabnavItem>
        </Tabnavigation> 
      </Header>
      <Body>
        <FilterBar defaultSelection='8' />
      </Body>
    </Main>
  )
}

export default ProjectRedis