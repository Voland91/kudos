import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightborder } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';

const StyledKudosWrapper = styled.label`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  ${lightborder};
  padding-left: 29px;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightgray};
  }
`;

const Input = styled.input`
  -webkit-appearance: none;

  &:checked + ${StyledKudosWrapper} {
    background-color: ${({ theme }) => theme.lightgray};
    border: 1px solid #a8996f;
  }
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  flex: 1;
`;

const FormAddKudos = ({ title, description, img, whichKudos, id }) => (
  <>
    <Input id={id} type="radio" onChange={whichKudos} name="kudos" />
    <StyledKudosWrapper htmlFor={id}>
      <Icon smallkudos src={`${img}`} />
      <StyledDescriptionWrapper>
        <Text smallkudos>{title}</Text>
        <Title smallkudos>{description}</Title>
      </StyledDescriptionWrapper>
    </StyledKudosWrapper>
  </>
);

FormAddKudos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  whichKudos: PropTypes.func.isRequired,
};

export default FormAddKudos;
