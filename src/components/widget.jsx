import styled from 'styled-components'
import '../styles/theme.css'

const Widget = ({className, children, title}) => (
  <WidgetStyles className={className}>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </WidgetStyles>
);

const WidgetStyles = styled('div')`
  background-color: var(--dark200);
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  padding: var(--space-md);
  border-radius: var(--radius);
  position: relative;
  min-height: 60px;
`;

const StyledTitle = styled('h4')`
  margin-bottom: var(--space-sm);
`;

export default Widget;
