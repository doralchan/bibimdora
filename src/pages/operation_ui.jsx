import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationUI() {
  return (
    <Main>
      <Header title='UI'></Header>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default OperationUI