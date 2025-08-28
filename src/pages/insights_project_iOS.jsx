import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import AppleLogo from '../assets/logo-apple.svg'

function InsightsProjectiOS() {
  return (
    <Main>
      <Header title='@peated/iOS' logo={AppleLogo} />
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsProjectiOS