import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Widgets from '../layouts/widgets'

import Tabnavigation from '../layouts/tabnavigation'
import TabnavItem from '../layouts/tabnavitem'

import FilterBar from '../components/filterBar'

function AppServices() {
  return (
    <Main>
      <Header title='Peated App'>
        <Tabnavigation>
          <TabnavItem>Overview</TabnavItem>
          <TabnavItem>UI</TabnavItem>
          <TabnavItem>Queries</TabnavItem>
          <TabnavItem>Network Requests</TabnavItem>
          <TabnavItem>Releases</TabnavItem>
          <TabnavItem>+12 More</TabnavItem>
        </Tabnavigation>
      </Header>
      <Body>
        <FilterBar defaultSelection='0' />
        <Widgets />
      </Body>
    </Main>
  )
}

export default AppServices