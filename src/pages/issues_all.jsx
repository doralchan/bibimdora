import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function AllIssues() {
  return (
    <Main>
      <Header title='All Issues'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default AllIssues