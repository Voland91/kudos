import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import Text from 'components/atoms/Text';
import PostListsHeader from 'components/molecules/PostListsHeader';
import Kudos from 'components/molecules/Kudos';
import PostListsComment from 'components/molecules/PostListsComment';
import PostListsNavigation from 'components/molecules/PostListsNavigation';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0;
  width: ${({ theme }) => theme.width};
  height: 513px;
  ${border};
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
  departamentId,
}) => {
  const activePerson = persons.find(person => person.isActive);
  return (
    <StyledWrapper>
      <PostListsHeader name={name} date={date} avatar={avatar} />
      <Text>{description}</Text>
      <Kudos kudos={kudos} persons={persons} kudoses={kudoses} />
      <PostListsNavigation heart={heart} postId={postId} departamentId={departamentId} />
      <PostListsComment avatar={activePerson.avatar} />
    </StyledWrapper>
  );
};

Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heart: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  departamentId: PropTypes.number.isRequired,
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
  persons: {},
  kudoses: {},
};

export default Post;
