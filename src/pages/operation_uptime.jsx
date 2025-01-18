import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationUptime() {
  return (
    <Main>
      <Header title='Uptime'/>
      <Body>
        <FilterBar defaultSelection='4' />
      </Body>
    </Main>
  )
}

export default OperationUptime