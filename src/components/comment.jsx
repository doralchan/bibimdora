import Link from '../components/link'
import Icon from '../components/icon'

import CommentIcon from '../assets/icon-comment.svg'

import styled from 'styled-components'

const Comment = ({className, children, member, number}) => (
  <CommentStyles className={className}>
    <Icon src={CommentIcon}/> 
    <ContextStyles>
      <Member>{member} on ISSUE-{number}</Member>
      <Quote>"{children}"</Quote>
    </ContextStyles>
  </CommentStyles>
);

const CommentStyles = styled('div')`
  display: flex;
  padding: var(--space-sm) 0;
  gap: var(--space-sm);
`;

const ContextStyles = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Quote = styled('span')`
  font-style: italic;
`;

const Member = styled('h4')`
  color: var(--pink200);
`;

export default Comment;
