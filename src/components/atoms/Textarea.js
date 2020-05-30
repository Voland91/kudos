import styled from 'styled-components';

const Textarea = styled.textarea`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  color: inherit;
  border: none;
  font-family: inherit;
  resize: none;
  inline-size: inherit;
`;

export default Textarea;
