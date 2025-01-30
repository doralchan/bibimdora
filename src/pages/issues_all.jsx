import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'
import FilterBar from '../layouts/filterBar'

import Banner from '../components/banner'

function AllIssues() {
  return (
    <Main>
      <Header title='All Issues'/>
      <Body>
        <FilterBar />
        <Banner 
          title='Chonkified Please' 
          description='Aubergine bamboo bitterleaf bok bologi bona bush cabbage catsear caulie cauliflower chard chestnut chickpea chickweed choy coriander corn courgette cress dandelion eggplant endive garbanzo gourd greens gumbo j. Artichoke aubergine avocado azuki bean beetroot bell black-eyed bok.'
          primary='Setup Now'
          secondary='Read Docs'
          />
      </Body>
    </Main>
  )
}

export default AllIssues