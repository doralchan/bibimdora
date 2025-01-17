import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function ExploreErrors() {
  return (
    <Main>
      <Header title='Errors'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default ExploreErrors