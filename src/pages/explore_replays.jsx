import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function ExploreReplays() {
  return (
    <Main>
      <Header title='Replays'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default ExploreReplays