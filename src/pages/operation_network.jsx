import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationNetwork() {
  return (
    <Main>
      <Header title='Network Requests'></Header>
      <Body>
        <FilterBar defaultSelection='14' />
      </Body>
    </Main>
  )
}

export default OperationNetwork