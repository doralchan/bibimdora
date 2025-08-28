import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import DefaultLogo from '../assets/logo-default.svg'

function Quality() {
  return (
    <Main>
      <Header title='Quality' logo={DefaultLogo}/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default Quality