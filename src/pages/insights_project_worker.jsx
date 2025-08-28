import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import NodeLogo from '../assets/logo-node.svg'

function InsightsProjectWorker() {
  return (
    <Main>
      <Header title='@peated/worker' logo={NodeLogo} />
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default InsightsProjectWorker