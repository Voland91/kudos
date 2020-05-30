import styled, { css } from 'styled-components';

const Title = styled.h2`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.medium};

  ${props =>
    props.big &&
    css`
      font-size: ${({ theme }) => theme.large};
    `};

  ${props =>
    props.form &&
    css`
      flex: 1;
      margin-left: 18px;
      font-size: ${({ theme }) => theme.small};
      color: ${({ theme }) => theme.darkgray};
      font-weight: ${({ theme }) => theme.semibold};
      text-transform: uppercase;
    `};

  ${props =>
    props.smallkudos &&
    css`
      color: ${({ theme }) => theme.darkgray};
      font-size: ${({ theme }) => theme.small};
      font-weight: ${({ theme }) => theme.bold};
      margin: 0;
    `};
`;

export default Title;
