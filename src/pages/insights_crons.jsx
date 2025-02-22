import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsCrons() {
  return (
    <Main>
      <Header title='Crons'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsCrons