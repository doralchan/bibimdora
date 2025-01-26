import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function OperationScreenloads() {
  return (
    <Main>
      <Header title='Screenloads'/>
      <Body>
        <FilterBar defaultSelection='6' />
      </Body>
    </Main>
  )
}

export default OperationScreenloads