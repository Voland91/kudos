import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lightborder } from 'theme/mixins';
// import Icon from 'components/atoms/Icon';
// import Textarea from 'components/atoms/Textarea';
import Text from 'components/atoms/Text';
import TextInput from 'components/atoms/TextInput';

// import gif from 'assets/icons/sticky-note-regular.svg';
// import emoticon from 'assets/icons/smile-regular.svg';
// import clip from 'assets/icons/paperclip-solid.svg';

const StyledBadgeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledEditorWrapper = styled.div`
  ${lightborder};
  width: 100%;
  height: 97px;
  padding: 6px 8px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

// const StyledEmoticons = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: flex-end;
// `;

const FormPost = ({ persons }) => (
  <>
    <Text form>Treść posta nad kudosem</Text>
    <StyledBadgeWrapper>
      <StyledEditorWrapper>
        <TextInput persons={persons} />
        {/* <Textarea placeholder="Tresć posta..." /> */}
        {/* <StyledEmoticons>
          <Icon comment src={gif} />
          <Icon comment src={emoticon} />
          <Icon comment src={clip} />
        </StyledEmoticons> */}
      </StyledEditorWrapper>
    </StyledBadgeWrapper>
  </>
);

FormPost.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};

FormPost.defaultProps = {
  persons: {},
};

export default FormPost;
