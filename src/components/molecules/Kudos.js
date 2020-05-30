import React from 'react';
import styled from 'styled-components';
import { border } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import icon from 'assets/icons/undraw_real_time_collaboration_c62i.svg';

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

const Kudos = () => (
  <StyledBadgeWrapper>
    <Icon big src={icon} />
    <StyledDescriptionWrapper>
      <Text big>Świetny współpracownik</Text>
      <Title big>Barbara Klimowicz</Title>
    </StyledDescriptionWrapper>
  </StyledBadgeWrapper>
);

export default Kudos;
