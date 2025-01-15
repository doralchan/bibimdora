import styled from 'styled-components'
import '../styles/theme.css'

const Main = ({className, children}) => (
    <MainStyles className={className}>
      {children}
    </MainStyles>
  );
  
  const MainStyles = styled('div')`
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: auto 1fr;
  `;

export default Main;
