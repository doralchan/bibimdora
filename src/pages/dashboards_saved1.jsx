import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function SavedDashboard1() {
  return (
    <Main>
      <Header title='Custom Dashboard 1'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default SavedDashboard1