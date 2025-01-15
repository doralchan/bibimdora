import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import Tabnavigation from '../layouts/tabnavigation'
import TabnavItem from '../layouts/tabnavitem'

import FilterBar from '../components/filterBar'

function ProjectApple() {
  return (
    <Main>
      <Header title='Mobile'>
        <Tabnavigation>
          <TabnavItem>Overview</TabnavItem>
          <TabnavItem>App Starts</TabnavItem>
          <TabnavItem>Screenloads</TabnavItem> 
          <TabnavItem>Rendering</TabnavItem>
          <TabnavItem>Network Requests</TabnavItem>
          <TabnavItem>Releases</TabnavItem>
        </Tabnavigation> 
      </Header>
      <Body>
        <FilterBar defaultSelection='11' />
      </Body>
    </Main>
  )
}

export default ProjectApple