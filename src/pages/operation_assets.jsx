import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationAssets() {
  return (
    <Main>
      <Header title='Assets'></Header>
      <Body>
        <FilterBar defaultSelection='1' />
      </Body>
    </Main>
  )
}

export default OperationAssets