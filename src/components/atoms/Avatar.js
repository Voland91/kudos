import styled, { css } from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;

  ${props =>
    props.small &&
    css`
      background-color: transparent;
      height: 32px;
      width: 32px;
    `};
`;

export default Avatar;
