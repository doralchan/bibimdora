import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function InsightsAssetsWeb() {
  return (
    <Main>
      <Header title='Web Assets'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsAssetsWeb