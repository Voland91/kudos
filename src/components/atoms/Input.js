import styled from 'styled-components';

const Input = styled.input`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.darkgray};
  opacity: 50%;
  width: 334px;
  height: 20px;
  border: none;
  flex: 1;
`;

export default Input;
