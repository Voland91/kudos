import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import AddPost from 'templates/AddPost';

const StyledModalWrapper = styled.aside`
  background-color: rgba(168, 153, 111, 0.4);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-x: auto;
`;

const AddPostModal = ({ kudoses, persons }) => {
  const history = useHistory();
  const handleClose = e => {
    e.stopPropagation();
    history.goBack();
  };

  return createPortal(
    <StyledModalWrapper onClick={handleClose}>
      <AddPost kudoses={kudoses} persons={persons} />
    </StyledModalWrapper>,
    document.querySelector('#modal'),
  );
};

export default AddPostModal;
