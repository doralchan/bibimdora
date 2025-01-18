import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Widgets from '../layouts/widgets'

import FilterBar from '../layouts/filterBar'

function OverviewOperations() {
  return (
    <Main>
      <Header title='Overview'/>
      <Body>
        <FilterBar />
        <Widgets />
      </Body>
    </Main>
  )
}

export default OverviewOperations