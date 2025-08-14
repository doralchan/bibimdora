import Main from '../layouts/main'
import Header from '../layouts/header'
import Body from '../layouts/body'

import Banner from '../components/banner'
import HeroImage from '../assets/hero-image-1.png'

import styled from 'styled-components'

function DashboardsOverview() {
  return (
    <Main>
      <Header title='Overview'/>
      <Body>
        <Banner 
          title='Chonkified Please' 
          description='Aubergine bamboo bitterleaf bok bologi bona bush cabbage catsear caulie cauliflower chard chestnut chickpea chickweed choy coriander corn courgette cress dandelion eggplant endive garbanzo gourd greens gumbo j. Artichoke aubergine avocado azuki bean beetroot bell black-eyed bok.'
          primary='Setup Now'
          secondary='Read Docs'
        >
          <StyledHero src={HeroImage} alt='' />
        </Banner>
      </Body>
    </Main>
  )
}

const StyledHero = styled('img')`
  position: absolute;
  right: 10%;
  width: 38%;
  max-width: 800px;
`;

export default DashboardsOverview