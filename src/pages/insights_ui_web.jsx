import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsUIWeb() {
  return (
    <Main>
      <Header title='UI Components'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsUIWeb