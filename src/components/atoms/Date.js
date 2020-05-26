import styled from 'styled-components';

const Date = styled.p`
  color: ${({ theme }) => theme.gray};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
`;

export default Date;
