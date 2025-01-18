import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function Security() {
  return (
    <Main>
      <Header title='Security'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default Security