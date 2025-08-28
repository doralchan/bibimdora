import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import DefaultLogo from '../assets/logo-default.svg'

function DashboardsWebVitals() {
  return (
    <Main>
      <Header title='Web Vitals' logo={DefaultLogo}/>
      <Body>
        <FilterBar />
      </Body>
    </Main>
  )
}

export default DashboardsWebVitals