import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import PostListsHeader from 'components/molecules/PostListsHeader';
import Kudos from 'components/molecules/Kudos';
import PostListsComment from 'components/molecules/PostListsComment';
import PostListsNavigation from 'components/molecules/PostListsNavigation';
import '../atoms/editorStyles/emojiEditorStyles.css';
import '../atoms/editorStyles/mentionsEditorStyles.css';
import '../atoms/editorStyles/hashtagEditorStyles.css';
import '../atoms/editorStyles/counterEditorStyles.css';
import parser from 'html-react-parser';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0;

  ${border};
`;
const StyledPostTextWrapper = styled.div`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  margin: 28px 0 24px 0;
`;

const Post = ({
  name,
  date,
  avatar,
  description,
  heart,
  postId,
  persons,
  kudos,
  kudoses,
  groupId,
}) => {
  const activePerson = persons.find(person => person.isActive);
  const textPost = parser(description);

  // console.log(isMobile);

  return (
    <StyledWrapper>
      <PostListsHeader name={name} date={date} avatar={avatar} />
      <StyledPostTextWrapper>{textPost}</StyledPostTextWrapper>
      <Kudos kudos={kudos} persons={persons} kudoses={kudoses} />
      <PostListsNavigation heart={heart} postId={postId} groupId={groupId} />
      <PostListsComment avatar={activePerson.avatar} />
    </StyledWrapper>
  );
};

Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string,
  heart: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  groupId: PropTypes.number.isRequired,
  kudos: PropTypes.objectOf(PropTypes.number).isRequired,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};

Post.defaultProps = {
  description: '',
  persons: {},
  kudoses: {},
};

export default Post;
