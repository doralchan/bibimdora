import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsProjectServer() {
  return (
    <Main>
      <Header title='@peated/server'/>
      <Body>
        <FilterBar defaultSelection='2' />
      </Body>
    </Main>
  )
}

export default InsightsProjectServer