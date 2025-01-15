import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import Tabnavigation from '../layouts/tabnavigation'
import TabnavItem from '../layouts/tabnavitem'

function ProjectEmpty() {
  return (
    <Main>
      <Header title='New App'>
        <Tabnavigation>
          <TabnavItem>Overview</TabnavItem>
        </Tabnavigation>
      </Header>
      <Body>CTA to add project</Body>
    </Main>
  )
}

export default ProjectEmpty