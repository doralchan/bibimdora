import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationProjectGo() {
  return (
    <Main>
      <Header title='Overview'></Header>
      <Body>
        <FilterBar defaultSelection='15' />
      </Body>
    </Main>
  )
}

export default OperationProjectGo