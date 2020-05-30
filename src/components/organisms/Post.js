import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import Text from 'components/atoms/Text';
import Header from 'components/molecules/Header';
import Kudos from 'components/molecules/Kudos';
import Comment from 'components/molecules/Comment';
import PostNavigation from 'components/molecules/PostNavigation';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0;
  width: ${({ theme }) => theme.width};
  height: 513px;
  ${border};
`;

const Post = ({ name, date, avatar, description, heart, postId }) => (
  <StyledWrapper>
    <Header name={name} date={date} avatar={avatar} />
    <Text>{description}</Text>
    <Kudos smallkudos />
    <PostNavigation heart={heart} postId={postId} />
    <Comment avatar={avatar} />
  </StyledWrapper>
);

Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heart: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
};

export default Post;
