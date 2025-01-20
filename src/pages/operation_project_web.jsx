import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationProjectWeb() {
  return (
    <Main>
      <Header title='@peated/web'/>
      <Body>
        <FilterBar defaultSelection='1' />
      </Body>
    </Main>
  )
}

export default OperationProjectWeb