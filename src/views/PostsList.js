import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Post from 'components/organisms/Post';
import AddPostButton from 'components/molecules/AddPostButton';
import AddPostModal from 'views/AddPostModal';
import { useMediaQuery } from 'react-responsive';

const StyledPostsWrapper = styled.div`
  margin: 50px auto;
  width: ${({ theme }) => theme.width};
  ${props =>
    props.isMobile &&
    css`
      width: 100%;
    `};
`;

const Posts = ({ posts, persons, kudoses }) => {
  const sortedPosts = posts.sort((a, b) => parseFloat(b.postId) - parseFloat(a.postId));
  const isMobile = useMediaQuery({ maxWidth: 664 });

  return (
    <>
      <StyledPostsWrapper isMobile={isMobile}>
        <AddPostButton persons={persons} />
        {sortedPosts.map(({ authorId, date, postId, description, heart, kudos, groupId }) => (
          <Post
            persons={persons}
            name={persons[authorId - 1].name}
            avatar={persons[authorId - 1].avatar}
            date={date}
            description={description}
            key={postId}
            postId={postId}
            heart={heart}
            kudos={kudos}
            kudoses={kudoses}
            posts={posts}
            groupId={groupId}
          />
        ))}
      </StyledPostsWrapper>
      <Switch>
        <Route path="/home/form">
          <AddPostModal kudoses={kudoses} persons={persons} />
        </Route>
      </Switch>
    </>
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
      groupId: PropTypes.number.isRequired,
      kudos: PropTypes.objectOf(PropTypes.number),
    }),
  ),
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
