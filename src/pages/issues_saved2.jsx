import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../components/filterBar'

function SavedView2() {
  return (
    <Main>
      <Header title='Custom View 2'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default SavedView2