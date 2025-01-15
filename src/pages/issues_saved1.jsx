import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

function SavedView1() {
  return (
    <Main>
      <Header title='Custom View 1'></Header>
      <Body>Prefiltered issues body</Body>
    </Main>
  )
}

export default SavedView1