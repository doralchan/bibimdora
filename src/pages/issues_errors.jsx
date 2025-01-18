import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function Errors() {
  return (
    <Main>
      <Header title='Errors & Outages'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default Errors