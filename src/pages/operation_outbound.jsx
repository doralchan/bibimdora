import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationOutbound() {
  return (
    <Main>
      <Header title='Outbound Requests'/>
      <Body>
        <FilterBar defaultSelection='4' />
      </Body>
    </Main>
  )
}

export default OperationOutbound