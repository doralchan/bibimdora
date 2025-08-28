import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import NodeLogo from '../assets/logo-node.svg'

function SavedView2() {
  return (
    <Main>
      <Header title='Custom View 2' logo={NodeLogo}/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default SavedView2