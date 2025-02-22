import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsQueues() {
  return (
    <Main>
      <Header title='Queues'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsQueues