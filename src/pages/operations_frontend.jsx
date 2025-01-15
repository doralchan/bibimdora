import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function FrontendOperations() {
  return (
    <Main>
      <Header title='Frontend'></Header>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default FrontendOperations