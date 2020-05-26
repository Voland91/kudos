import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import icon from 'assets/icons/city-solid.svg';
import hearth from 'assets/icons/heart-solid.svg';
import comment from 'assets/icons/comment-alt-solid.svg';
import dots from 'assets/icons/ellipsis-v-solid.svg';

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

const PostNavigation = () => (
  <StyledBadgeWrapper>
    <StyledLeftWrapper>
      <Icon src={icon} />
      <Text link>Marketing</Text>
    </StyledLeftWrapper>
    <StyledRightWrapper>
      <Icon small src={hearth} />
      <Text counter>4</Text>
      <Icon small src={comment} />
      <Text counter>0</Text>
    </StyledRightWrapper>
    <Icon small src={dots} />
  </StyledBadgeWrapper>
);

// Content.propTypes = {
//   description: PropTypes.string.isRequired,
// };

export default PostNavigation;
