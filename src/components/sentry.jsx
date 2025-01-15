import SentryLogo from '../assets/logo-sentry.svg'

import styled from 'styled-components'
import '../styles/theme.css'

const Sentry = ({className}) => (
  <SentryStyles className={className} src={SentryLogo}/>
);

const SentryStyles = styled('img')`
  display: block;
  border-radius: var(--radius);
  border: 1px solid var(--pink200);
  border-bottom-width: 3px;
`;

export default Sentry;
