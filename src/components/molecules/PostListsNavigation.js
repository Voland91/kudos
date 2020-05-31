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
const PostNavigation = ({ postId, heart, addHeart, departamentId, departaments }) => {
  // const dep = departaments.find(item => item.id === departaments.departamentId);

  const dep = departaments.find(item => item.id === departamentId);

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

PostNavigation.propTypes = {
  postId: PropTypes.number.isRequired,
  heart: PropTypes.number.isRequired,
  addHeart: PropTypes.func.isRequired,
  departamentId: PropTypes.number.isRequired,
  departaments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};

PostNavigation.defaultProps = {
  departaments: {},
};

const mapStateToProps = state => ({
  departaments: state.departamentsState,
});

export default connect(
  mapStateToProps,
  { addHeart },
)(PostNavigation);
