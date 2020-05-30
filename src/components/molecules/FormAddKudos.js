import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightborder } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';

const StyledKudosWrapper = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  ${lightborder};
  padding-left: 29px;
  align-items: center;
  margin-top: 16px;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  flex: 1;
`;

const FormAddKudos = ({ title, description, img }) => (
  <StyledKudosWrapper>
    <Icon smallkudos src={`${img}`} />
    <StyledDescriptionWrapper>
      <Text smallkudos>{title}</Text>
      <Title smallkudos>{description}</Title>
    </StyledDescriptionWrapper>
  </StyledKudosWrapper>
);

FormAddKudos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default FormAddKudos;
