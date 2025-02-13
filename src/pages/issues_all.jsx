import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import Issues from '../layouts/table_issues'
import FilterBar from '../layouts/filterBar'

function AllIssues() {
  return (
    <Main>
      <Header title='All Issues'/>
      <Body>
        <FilterBar placeholder='Filter events...'/>
        <Issues />
      </Body>
    </Main>
  )
}

export default AllIssues