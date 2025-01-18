import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationAssets() {
  return (
    <Main>
      <Header title='Assets'/>
      <Body>
        <FilterBar defaultSelection='1' />
      </Body>
    </Main>
  )
}

export default OperationAssets