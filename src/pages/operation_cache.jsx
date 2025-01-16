import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationCache() {
  return (
    <Main>
      <Header title='Cache'></Header>
      <Body>
        <FilterBar defaultSelection='17' />
      </Body>
    </Main>
  )
}

export default OperationCache