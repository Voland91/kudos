import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightborder } from 'theme/mixins';
import Text from 'components/atoms/Text';
import TextInput from 'components/atoms/TextInput';

const StyledEditorWrapper = styled.div`
  ${lightborder};
  width: 100%;
  height: 105px;
  padding: 6px 8px;
`;

const FormPost = ({ persons, postText }) => (
  <>
    <Text formlook>Treść posta nad kudosem</Text>
    <StyledEditorWrapper>
      <TextInput persons={persons} postText={postText} />
    </StyledEditorWrapper>
  </>
);

FormPost.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
  postText: PropTypes.func.isRequired,
};

FormPost.defaultProps = {
  persons: {},
};

export default FormPost;
