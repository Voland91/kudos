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

const Posts = ({ posts, persons, kudoses }) => {
  return (
    <MainTemplate>
      <StyledNotesWrapper>
        <AddPost persons={persons} />
        {posts.map(({ authorId, date, postId, description, heart, kudos }) => (
          <Post
            persons={persons}
            name={persons[authorId].name}
            avatar={persons[authorId].img}
            date={date}
            description={description}
            key={postId}
            postId={postId}
            heart={heart}
            kudos={kudos}
            kudoses={kudoses}
            posts={posts}
          />
        ))}
      </StyledNotesWrapper>
    </MainTemplate>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      heart: PropTypes.number.isRequired,
      kudos: PropTypes.objectOf(PropTypes.number),
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
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};

Posts.defaultProps = {
  posts: {},
  persons: {},
  kudoses: {},
};

const mapStateToProps = state => ({
  posts: state.postsState,
  persons: state.personsState,
  kudoses: state.kudosesState,
});

export default connect(mapStateToProps)(Posts);
