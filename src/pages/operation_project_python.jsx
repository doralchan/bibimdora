import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationProjectPython() {
  return (
    <Main>
      <Header title='Overview'></Header>
      <Body>
        <FilterBar defaultSelection='16' />
      </Body>
    </Main>
  )
}

export default OperationProjectPython