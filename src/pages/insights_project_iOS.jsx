import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsProjectiOS() {
  return (
    <Main>
      <Header title='@peated/iOS'/>
      <Body>
        <FilterBar isServicePage />
      </Body>
    </Main>
  )
}

export default InsightsProjectiOS