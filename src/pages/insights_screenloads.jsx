import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsScreenloads() {
  return (
    <Main>
      <Header title='Screenloads'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsScreenloads