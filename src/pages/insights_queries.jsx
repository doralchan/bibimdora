import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsQueries() {
  return (
    <Main>
      <Header title='Queries'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsQueries