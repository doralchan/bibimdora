import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function BackendOperations() {
  return (
    <Main>
      <Header title='Backend'></Header>
      <Body>
        <FilterBar defaultSelection='17' />
      </Body>
    </Main>
  )
}

export default BackendOperations