import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import MyDashboardsList from '../layouts/table_dashboards'

import styled from 'styled-components'
import '../styles/theme.css'

function AllDashboards() {
  return (
    <Main>
      <Header title='All Dashboards'/>
      <Body>
        <MyDashboardsList/>
      </Body>
    </Main>
  )
}


export default AllDashboards