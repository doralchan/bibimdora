import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function Craft() {
  return (
    <Main>
      <Header title='Craft'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default Craft