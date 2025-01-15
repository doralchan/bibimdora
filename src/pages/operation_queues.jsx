import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationQueues() {
  return (
    <Main>
      <Header title='Queues'></Header>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default OperationQueues