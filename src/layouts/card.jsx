import styled from 'styled-components'
import '../styles/theme.css'

import AvatarImage from '../assets/avatar.png'

const Card = ({className, title, description, children}) => (
  <StyledCard className={className}>
    <CardHeader>
      <div>
        <h4>{title}</h4>
        <Description>{description}</Description>
      </div>
      <Avatar />
    </CardHeader>
    <CardBody>
      {children}
    </CardBody>
  </StyledCard>
);

const StyledCard = styled('div')`
  background-color: var(--dark200);
  border: 1px solid var(--dark500);
  border-bottom-width: 3px;
  border-radius: var(--radius);
  position: relative;
  min-height: 175px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: var(--space-lg) var(--space-lg) var(--space-sm) var(--space-lg);
`;

const CardBody = styled('div')`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: var(--dark300);
  height: 100%;
  width: 100%;
`;

const Description = styled('p')`
  color: var(--purple100);
  margin-bottom: var(--space-sm);
`;

const Avatar = styled('div')`
  width: var(--space-xl);
  height: var(--space-xl);
  border-radius: 100%;
  border: 2px solid var(--purple200);
  background-image: url(${AvatarImage});
  background-size: 100%;
`;

export default Card;
