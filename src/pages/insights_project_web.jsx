import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import NextJSLogo from '../assets/logo-nextjs.svg'

function InsightsProjectWeb() {
  return (
    <Main>
      <Header title='@peated/web' logo={NextJSLogo} />
      <Body>
        <FilterBar isServicePage />
      </Body>
    </Main>
  )
}

export default InsightsProjectWeb