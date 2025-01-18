import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import FilterBar from '../layouts/filterBar'

function ExploreProfiles() {
  return (
    <Main>
      <Header title='Profiles'/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default ExploreProfiles