import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  width: 100%;
  height: 56px;
  align-items: center;
  ${border};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.gold};
  }
`;

const AddPostForm = ({ persons }) => {
  const activePerson = persons.find(person => person.isActive);

  return (
    <Link to="home/form">
      <StyledWrapper>
        <Avatar src={activePerson.avatar} />
        <Text addPost>Click here to add a new post</Text>
        <Icon addPost src={icon} />
      </StyledWrapper>
    </Link>
  );
};

AddPostForm.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};

AddPostForm.defaultProps = {
  persons: {},
};

export default AddPostForm;
