import styled, { css } from 'styled-components';

const Icon = styled.img`
  background-color: ${({ theme }) => theme.grayborder};
  height: 24px;
  width: 24px;
  padding: 3px;
  cursor: pointer;
  border-radius: 6px;
  border: none;

  ${props =>
    props.big &&
    css`
      background-color: transparent;
      height: 100px;
      width: 124px;
      padding: 0;
    `};

  ${props =>
    props.small &&
    css`
      background-color: transparent;
      height: 14px;
      width: 14px;
      padding: 1px;
      border-radius: 0;
    `};

  ${props =>
    props.comment &&
    css`
      background-color: transparent;
      height: 24px;
      width: 24px;
      padding: 5px;
      border-radius: 0;
    `};

  ${props =>
    props.addPost &&
    css`
      background-color: transparent;
    `};
`;

export default Icon;
