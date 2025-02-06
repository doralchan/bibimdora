import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsProjectWeb() {
  return (
    <Main>
      <Header title='@peated/web'/>
      <Body>
        <FilterBar isServicePage />
      </Body>
    </Main>
  )
}

export default InsightsProjectWeb