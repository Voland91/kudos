import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightborder } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';

const StyledKudosLabel = styled.label`
  margin-top: 16px;
  padding: 0;
  height: 80px;
`;

const StyledKudosWrapper = styled.label`
  margin: 0px;
  display: flex;
  height: 80px;
  width: 100%;
  ${lightborder};
  padding-left: 29px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightgray};
  }
`;

const Input = styled.input`
  display: none;
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

const FormAddKudos = ({ title, description, img, onChange, id }) => (
  <>
    <StyledKudosLabel htmlFor="kudos">
      <Input id={id} type="radio" onChange={onChange} name="kudos" />
      <StyledKudosWrapper htmlFor={id}>
        <Icon smallkudos src={`${img}`} />
        <StyledDescriptionWrapper>
          <Text smallkudos>{title}</Text>
          <Title smallkudos>{description}</Title>
        </StyledDescriptionWrapper>
      </StyledKudosWrapper>
    </StyledKudosLabel>
  </>
);

FormAddKudos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormAddKudos;
