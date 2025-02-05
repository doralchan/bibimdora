import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsProjectWorker() {
  return (
    <Main>
      <Header title='@peated/worker'/>
      <Body>
        <FilterBar defaultSelection='7' />
      </Body>
    </Main>
  )
}

export default InsightsProjectWorker