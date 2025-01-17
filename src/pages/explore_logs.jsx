import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function ExploreLogs() {
  return (
    <Main>
      <Header title='Logs'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default ExploreLogs