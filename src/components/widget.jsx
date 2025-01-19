import styled from 'styled-components'
import '../styles/theme.css'

const Widget = ({className, children, title}) => (
  <WidgetStyles className={className}>
    <h4>{title}</h4>
    {children}
  </WidgetStyles>
);

const WidgetStyles = styled('div')`
  background-color: var(--white);
  border: 1px solid var(--gray200);
  border-bottom-width: 3px;
  padding: var(--space-md);
  border-radius: var(--radius);
  position: relative;
  min-height: 50px;
`;

export default Widget;
