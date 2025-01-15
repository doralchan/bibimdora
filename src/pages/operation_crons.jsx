import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationCrons() {
  return (
    <Main>
      <Header title='Crons'></Header>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default OperationCrons