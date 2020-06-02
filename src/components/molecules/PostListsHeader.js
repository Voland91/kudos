import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Date from 'components/atoms/Date';
import Avatar from 'components/atoms/Avatar';
import icon from 'assets/icons/agreement.svg';

dayjs.extend(utc);
dayjs.extend(relativeTime);

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

const Header = ({ name, date, avatar }) => (
  <StyledHeaderWrapper>
    <Avatar src={avatar} />
    <StyledDataWrapper>
      <Title>{name}</Title>
      <Date>{dayjs(date).fromNow()}</Date>
    </StyledDataWrapper>
    <Icon src={icon} />
  </StyledHeaderWrapper>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Header;
