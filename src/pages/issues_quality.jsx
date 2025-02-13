import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function Quality() {
  return (
    <Main>
      <Header title='Quality'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default Quality