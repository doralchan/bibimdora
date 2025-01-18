import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationNetwork() {
  return (
    <Main>
      <Header title='Network Requests'/>
      <Body>
        <FilterBar defaultSelection='1' />
      </Body>
    </Main>
  )
}

export default OperationNetwork