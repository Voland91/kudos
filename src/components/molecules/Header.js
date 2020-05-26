import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Date from 'components/atoms/Date';
import Avatar from 'components/atoms/Avatar';
import icon from 'assets/icons/agreement.svg';

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
`;

const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  padding-left: 8px;
  flex: 1;
  justify-content: center;
`;

const Post = ({ name, date, avatar }) => (
  <StyledHeaderWrapper>
    <Avatar src={avatar} />
    <StyledDataWrapper>
      <Title>{name}</Title>
      <Date>{date}</Date>
    </StyledDataWrapper>
    <Icon src={icon} />
  </StyledHeaderWrapper>
);

Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Post;
