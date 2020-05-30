import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import Avatar from 'components/atoms/Avatar';
import Text from 'components/atoms/Text';
import Icon from 'components/atoms/Icon';
import icon from 'assets/icons/agreement.svg';

const StyledWrapper = styled.button`
  display: flex;
  padding: 16px;
  margin: 0;
  width: ${({ theme }) => theme.width};
  height: 56px;
  align-items: center;
  ${border};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.gold};
  }
`;

const AddPost = () => (
  <Link to="/form">
    <StyledWrapper>
      <Avatar src="https://randomuser.me/api/portraits/men/7.jpg" />
      <Text addPost>Kliknij, aby dodać post</Text>
      <Icon addPost src={icon} />
    </StyledWrapper>
  </Link>
);

export default AddPost;
