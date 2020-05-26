import styled, { css } from 'styled-components';

const Text = styled.p`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  margin: 38px 0 24px 0;

  ${props =>
    props.big &&
    css`
      font-size: ${({ theme }) => theme.medium};
      margin: 0;
    `};

  ${props =>
    props.link &&
    css`
      color: ${({ theme }) => theme.gold};
      font-size: ${({ theme }) => theme.xsmall};
      font-weight: ${({ theme }) => theme.semibold};
      margin: 0;
      margin-left: 8px;
    `};

  ${props =>
    props.counter &&
    css`
      color: ${({ theme }) => theme.gold};
      font-size: ${({ theme }) => theme.xsmall};
      font-weight: ${({ theme }) => theme.regular};
      margin: 0 8px 0 5.45px;
    `};

  ${props =>
    props.addPost &&
    css`
      color: ${({ theme }) => theme.gray};
      font-size: ${({ theme }) => theme.small};
      margin: 0 0 0 8px;
      text-align: left;
      width: 100%;
    `};
`;

export default Text;
