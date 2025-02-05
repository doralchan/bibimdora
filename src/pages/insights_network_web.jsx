import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsNetworkWeb() {
  return (
    <Main>
      <Header title='Network Requests'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsNetworkWeb