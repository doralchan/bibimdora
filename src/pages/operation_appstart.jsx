import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationAppstart() {
  return (
    <Main>
      <Header title='App Start'/>
      <Body>
        <FilterBar defaultSelection='6' />
      </Body>
    </Main>
  )
}

export default OperationAppstart