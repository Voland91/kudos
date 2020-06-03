import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import hearticon from 'assets/icons/heart-solid.svg';
import comment from 'assets/icons/comment-alt-solid.svg';
import dots from 'assets/icons/ellipsis-v-solid.svg';
import { connect } from 'react-redux';
import { addHeart } from '../../actions/addAction';

const StyledBadgeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 16px 0;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  flex: 1;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 17px;
`;

// eslint-disable-next-line no-shadow
const PostListNavigation = ({ postId, heart, addHeart, groupId, groups }) => {
  // const dep = departaments.find(item => item.id === departaments.departamentId);

  const dep = groups.find(item => item.id === groupId);

  return (
    <StyledBadgeWrapper>
      <StyledLeftWrapper>
        <Icon src={dep.img} />
        <Text link>{dep.name}</Text>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <Icon small src={hearticon} onClick={() => addHeart(postId)} />
        <Text counter>{heart}</Text>
        <Icon small src={comment} />
        <Text counter>0</Text>
      </StyledRightWrapper>
      <Icon small src={dots} />
    </StyledBadgeWrapper>
  );
};

PostListNavigation.propTypes = {
  postId: PropTypes.number.isRequired,
  heart: PropTypes.number.isRequired,
  addHeart: PropTypes.func.isRequired,
  groupId: PropTypes.number.isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};

PostListNavigation.defaultProps = {
  groups: {},
};

const mapStateToProps = state => ({
  groups: state.groupsState,
});

export default connect(mapStateToProps, { addHeart })(PostListNavigation);
