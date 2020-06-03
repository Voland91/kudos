import styled from 'styled-components';

const ValidationMessage = styled.p`
  background-color: #78107e;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.xsmall};
  border-radius: 6px;
  padding: 3px 7px;
  flex: 1;
  margin-top: 8px;
  width: 30%;
  text-align: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 15px;
    border: 0.75rem solid transparent;
    border-top: none;
    border-bottom-color: #78107e;
  }
`;

export default ValidationMessage;
