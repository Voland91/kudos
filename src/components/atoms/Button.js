import styled, { css } from 'styled-components';

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

  ${props =>
    props.dots &&
    css`
      background: url(${props.src});
      background-repeat: no-repeat;
      background-color: transparent;
      height: 14px;
      width: 14px;
      padding: 1px;
      border-radius: 0;
    `};
`;

export default Button;
