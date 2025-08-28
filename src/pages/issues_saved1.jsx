import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import NextJSLogo from '../assets/logo-nextjs.svg'

function SavedView1() {
  return (
    <Main>
      <Header title='Custom View 1' logo={NextJSLogo}/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default SavedView1