import { css } from 'styled-components';

const border = css`
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.grayborder};
  border-radius: ${({ theme }) => theme.rounded};
`;

const lightborder = css`
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.lightgray};
  border-radius: ${({ theme }) => theme.rounded};
`;

export { border, lightborder };
