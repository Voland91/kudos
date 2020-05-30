import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.small};
  font-weight: ${({ theme }) => theme.semibold};
  height: 36px;
  width: 120px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
`;

export default Button;
