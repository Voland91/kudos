import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Avatar from 'components/atoms/Avatar';
import Input from 'components/atoms/Input';
import gif from 'assets/icons/sticky-note-regular.svg';
import emoticon from 'assets/icons/smile-regular.svg';
import clip from 'assets/icons/paperclip-solid.svg';

const StyledBadgeWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.grayborder};
  width: 100%;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  ${border};
  width: 100%;
  height: 32px;
  padding: 6px 8px;
`;

const Comment = ({ avatar }) => (
  <StyledBadgeWrapper>
    <Avatar small src={avatar} />
    <StyledRightWrapper>
      <Input type="text" placeholder="Napisz komentarz..." />
      <Icon comment src={gif} />
      <Icon comment src={emoticon} />
      <Icon comment src={clip} />
    </StyledRightWrapper>
  </StyledBadgeWrapper>
);

Comment.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Comment;
