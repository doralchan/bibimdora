import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsOutbound() {
  return (
    <Main>
      <Header title='Outbound Requests'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsOutbound