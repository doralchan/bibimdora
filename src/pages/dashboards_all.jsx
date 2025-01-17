import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function AllDashboards() {
  return (
    <Main>
      <Header title='All Dashboards'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default AllDashboards