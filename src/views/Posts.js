import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from 'components/organisms/Post';
import AddPost from 'components/organisms/AddPost';
import MainTemplate from 'templates/MainTemplate';

const StyledNotesWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = ({ posts, persons }) => (
  <MainTemplate>
    <StyledNotesWrapper>
      <AddPost />
      {posts.map(({ authorId, date, postId, description, heart }) => (
        <Post
          name={persons[authorId].name}
          avatar={persons[authorId].img}
          date={date}
          description={description}
          key={postId}
          postId={postId}
          heart={heart}
        />
      ))}
    </StyledNotesWrapper>
  </MainTemplate>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      heart: PropTypes.number.isRequired,
    }),
  ),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};

Posts.defaultProps = {
  posts: {},
  persons: {},
};

const mapStateToProps = state => ({
  posts: state.postsState,
  persons: state.personsState,
});

export default connect(mapStateToProps)(Posts);
