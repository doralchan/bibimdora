import styled from 'styled-components'
import '../styles/theme.css'

const Widget = ({className, children, title}) => (
  <WidgetStyles className={className}>
    <h4>{title}</h4>
    <span>{children}</span>
  </WidgetStyles>
);

const WidgetStyles = styled('div')`
  background-color: var(--white);
  border: 1px solid var(--gray200);
  border-bottom-width: 3px;
  min-width: var(--space-unit);
  min-height: var(--space-unit);
  padding: var(--space-md);
  border-radius: var(--radius);
  min-height: 120px;
`;

export default Widget;
