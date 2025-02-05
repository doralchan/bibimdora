import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsAppstart() {
  return (
    <Main>
      <Header title='App Start'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsAppstart