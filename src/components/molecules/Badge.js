import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import icon from 'assets/icons/undraw_real_time_collaboration_c62i.svg';

const StyledBadgeWrapper = styled.div`
  display: flex;
  height: 193px;
  width: 532px;
  justify-content: space-between;
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.grayborder};
  border-radius: ${({ theme }) => theme.rounded};
  padding-left: 29px;
  align-items: center;
  &:hover {
    border: ${({ theme }) => theme.border} ${({ theme }) => theme.gold};
  }
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  flex: 1;
`;

const Badge = () => (
  <StyledBadgeWrapper>
    <Icon big src={icon} />
    <StyledDescriptionWrapper>
      <Text big>Świetny współpracownik</Text>
      <Title big>Barbara Klimowicz</Title>
    </StyledDescriptionWrapper>
  </StyledBadgeWrapper>
);

// Content.propTypes = {
//   Text: PropTypes.string.isRequired,
// };

export default Badge;
