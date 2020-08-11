import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';

import AddPost from 'templates/AddPost';

const StyledModalWrapper = styled.aside`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const AddPostModal = ({ kudoses, persons }) =>
  createPortal(
    <MainTemplate>
      <StyledModalWrapper>
        <AddPost kudoses={kudoses} persons={persons} />
      </StyledModalWrapper>
    </MainTemplate>,
    document.querySelector('#modal'),
  );

export default AddPostModal;
