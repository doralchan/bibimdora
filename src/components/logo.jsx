import styled from 'styled-components'
import '../styles/theme.css'

const Logo = ({className, src}) => (
  <LogoStyles className={className} src={src}/>
);

const LogoStyles = styled('img')`
  display: block;
  border-radius: var(--radius);
`;

export default Logo;
