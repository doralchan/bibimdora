import styled from 'styled-components'
import '../styles/theme.css'

const Link = ({className, href, children}) => (
  <LinkStyles className={className} href={href}>{children}</LinkStyles>
);

const LinkStyles = styled('a')`
  text-decoration: none;
  color: var(--purple200);
`;

export default Link;
