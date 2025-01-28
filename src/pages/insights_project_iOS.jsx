import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsProjectiOS() {
  return (
    <Main>
      <Header title='@peated/iOS'/>
      <Body>
        <FilterBar defaultSelection='6' />
      </Body>
    </Main>
  )
}

export default InsightsProjectiOS