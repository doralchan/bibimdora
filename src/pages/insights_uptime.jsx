import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsUptime() {
  return (
    <Main>
      <Header title='Uptime'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsUptime