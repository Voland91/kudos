import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar';
import Text from 'components/atoms/Text';
import Icon from 'components/atoms/Icon';
import icon from 'assets/icons/agreement.svg';

const StyledWrapper = styled.button`
  display: flex;
  padding: 16px;
  margin: 0;
  width: 564px;
  height: 56px;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.grayborder};
  border-radius: ${({ theme }) => theme.rounded};
  cursor: pointer;
`;

const AddPost = () => (
  <StyledWrapper>
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
    <Text addPost>Kliknij, aby dodać post</Text>
    <Icon addPost src={icon} />
  </StyledWrapper>
);

export default AddPost;
