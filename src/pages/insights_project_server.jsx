import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import NodeLogo from '../assets/logo-node.svg'

function InsightsProjectServer() {
  return (
    <Main>
      <Header title='@peated/server' logo={NodeLogo} />
      <Body>
        <FilterBar isServicePage />
      </Body>
    </Main>
  )
}

export default InsightsProjectServer