import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Widgets from '../layouts/widgets'

import FilterBar from '../components/filterBar'

function OverviewOperations() {
  return (
    <Main>
      <Header title='Overview'></Header>
      <Body>
        <FilterBar />
        <Widgets />
      </Body>
    </Main>
  )
}

export default OverviewOperations