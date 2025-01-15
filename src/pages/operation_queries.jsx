import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function OperationQueries() {
  return (
    <Main>
      <Header title='Queries'></Header>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default OperationQueries