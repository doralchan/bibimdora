import styled from 'styled-components'
import '../styles/theme.css'

const Page = ({className, children}) => (
    <PageStyles className={className}>
      {children}
    </PageStyles>
  );
  
  const PageStyles = styled('div')`
    display: grid;
    grid-template-columns: 60px auto;
    height: 100vh;
  `;

export default Page;
