import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from 'components/organisms/Post';
import AddPost from 'components/organisms/AddPost';
import MainTemplate from 'templates/MainTemplate';

// const StyledLogoLink = styled.div`
//   display: block;
//   width: 150px;
//   height: 60px;
//   /* background-image: url(); */
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
//   background-size: 100%;
//   border: none;
//   margin-bottom: 50px;
//   cursor: pointer;
// `;

const StyledNotesWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = ({ posts }) => (
  <MainTemplate>
    <>
      <StyledNotesWrapper>
        <AddPost />
        {posts.map(({ name, date, id, avatar, description, heart }) => (
          <Post
            avatar={avatar}
            name={name}
            date={date}
            description={description}
            key={id}
            id={id}
            heart={heart}
          />
        ))}
      </StyledNotesWrapper>
    </>
  </MainTemplate>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      heart: PropTypes.number.isRequired,
    }),
  ),
};

Posts.defaultProps = {
  posts: {},
};

const mapStateToProps = state => ({
  posts: state.postsState,
});

export default connect(mapStateToProps)(Posts);
