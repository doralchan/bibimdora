import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationWebVitals() {
  return (
    <Main>
      <Header title='Web Vitals'></Header>
      <Body>
        <FilterBar defaultSelection='14' />
      </Body>
    </Main>
  )
}

export default OperationWebVitals