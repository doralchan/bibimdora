import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationCache() {
  return (
    <Main>
      <Header title='Cache'/>
      <Body>
        <FilterBar defaultSelection='4' />
      </Body>
    </Main>
  )
}

export default OperationCache