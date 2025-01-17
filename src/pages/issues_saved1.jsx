import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function SavedView1() {
  return (
    <Main>
      <Header title='Custom View 1'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default SavedView1