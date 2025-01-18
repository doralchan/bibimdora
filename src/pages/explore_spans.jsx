import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function ExploreSpans() {
  return (
    <Main>
      <Header title='Spans'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default ExploreSpans