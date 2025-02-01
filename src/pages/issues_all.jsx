import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'
import Issues from '../layouts/table_issues'

function AllIssues() {
  return (
    <Main>
      <Header title='All Issues'/>
      <Body>
        <FilterBar />
        <Issues />
      </Body>
    </Main>
  )
}

export default AllIssues