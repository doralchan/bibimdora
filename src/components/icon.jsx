import styled from 'styled-components'
import '../styles/theme.css'

const Icon = ({className, style, src}) => (
  <IconStyles className={className} style={style} src={src}/>
);

const IconStyles = styled('img')`
  display: block;
  width: var(--space-lg);
  height: var(--space-lg);
`;

export default Icon;
