import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import icon from 'assets/icons/agreement_form.svg';
import close from 'assets/icons/close.svg';

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 20px;
  align-content: center;
`;

const FormHeader = () => (
  <StyledHeaderWrapper>
    <Icon addPost src={icon} />
    <Title formlook>utwórz kudos</Title>
    <Link to="/">
      <Icon formlook src={close} />
    </Link>
  </StyledHeaderWrapper>
);

export default FormHeader;
