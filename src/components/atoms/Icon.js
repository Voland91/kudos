import styled, { css } from 'styled-components';

const Icon = styled.img`
  height: 24px;
  width: 24px;
  padding: 3px;
  cursor: pointer;
  border-radius: 6px;
  border: none;

  ${props =>
    props.big &&
    css`
      height: 100px;
      width: 124px;
      padding: 0;
      cursor: default;
    `};

  ${props =>
    props.small &&
    css`
      height: 14px;
      width: 14px;
      padding: 1px;
      border-radius: 0;
    `};

  ${props =>
    props.comment &&
    css`
      padding: 5px;
      border-radius: 0;
    `};

  ${props =>
    props.formlook &&
    css`
      padding: 6px;
    `};

  ${props =>
    props.smallkudos &&
    css`
      max-width: 75px;
      width: auto;
      height: auto;
    `};
`;

export default Icon;
