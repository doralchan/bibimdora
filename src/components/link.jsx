import styled from 'styled-components'
import '../styles/theme.css'

const Link = ({className, href, children}) => (
  <LinkStyles className={className} href={href}>{children}</LinkStyles>
);

const LinkStyles = styled('a')`
  text-decoration: none;
  font-weight: 500;
  color: var(--purple200);
  cursor: pointer;
`;

export default Link;
