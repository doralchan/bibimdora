import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function Metrics() {
  return (
    <Main>
      <Header title='Metrics'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default Metrics