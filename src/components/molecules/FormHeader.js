import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import icon from 'assets/icons/agreement_form.svg';
import close from 'assets/icons/close.svg';
import Button from 'components/atoms/Button';

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 20px;
  align-content: center;
`;

const FormHeader = () => {
  const history = useHistory();
  return (
    <StyledHeaderWrapper>
      <Icon addPost src={icon} />
      <Title formlook>create a kudos</Title>
      <Button onClick={() => history.goBack()} dots src={close}>
        {/* <Icon formlook src={close} /> */}
      </Button>
    </StyledHeaderWrapper>
  );
};

export default FormHeader;
