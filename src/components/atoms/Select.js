import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

const Select = styled(ReactSelect)`
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.darkgray};
  width: 183px;

  ${props =>
    props.multi &&
    css`
      width: 100%;
    `}
`;

export default Select;
