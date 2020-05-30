import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';

const StyledBadgeWrapper = styled.div`
  display: flex;
  height: 193px;
  width: 100%;
  justify-content: space-between;
  ${border};
  padding-left: 29px;
  align-items: center;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  flex: 1;
`;

const Kudos = ({ kudos, persons, kudoses }) => {
  const badge = kudoses.find(item => item.id === kudos.kudosId);
  const person = persons.find(item => item.id === kudos.personId);

  return (
    <StyledBadgeWrapper>
      <Icon big src={badge.img} />
      <StyledDescriptionWrapper>
        <Text big>{badge.title}</Text>
        <Title big>{person.name}</Title>
      </StyledDescriptionWrapper>
    </StyledBadgeWrapper>
  );
};

Kudos.propTypes = {
  kudos: PropTypes.objectOf(PropTypes.number).isRequired,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};

Kudos.defaultProps = {
  persons: {},
  kudoses: {},
};

export default Kudos;
