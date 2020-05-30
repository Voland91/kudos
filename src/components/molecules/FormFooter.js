import React from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 20px;
  align-content: center;
`;

const FormFooter = () => (
  <>
    <Text form>Wybierz grupę</Text>
    <StyledHeaderWrapper />
  </>
);

export default FormFooter;
