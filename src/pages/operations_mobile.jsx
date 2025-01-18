import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function MobileOperations() {
  return (
    <Main>
      <Header title='Mobile'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default MobileOperations