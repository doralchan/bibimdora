import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationProjectPython() {
  return (
    <Main>
      <Header title='Overview'/>
      <Body>
        <FilterBar defaultSelection='3' />
      </Body>
    </Main>
  )
}

export default OperationProjectPython