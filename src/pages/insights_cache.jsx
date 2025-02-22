import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsCache() {
  return (
    <Main>
      <Header title='Cache'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsCache