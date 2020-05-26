import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from 'components/atoms/Text';
import Header from 'components/molecules/Header';
import Badge from 'components/molecules/Badge';
import Comment from 'components/molecules/Comment';
import PostNavigation from 'components/molecules/PostNavigation';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0;
  width: 564px;
  height: 513px;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.grayborder};
  border-radius: ${({ theme }) => theme.rounded};
`;

const Post = ({ name, date, avatar, description }) => (
  <StyledWrapper>
    <Header name={name} date={date} avatar={avatar} />
    <Text>{description}</Text>
    <Badge />
    <PostNavigation />
    <Comment avatar={avatar} />
  </StyledWrapper>
);

Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
