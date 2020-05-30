import React from 'react';
import styled from 'styled-components';
import { lightborder } from 'theme/mixins';
import Icon from 'components/atoms/Icon';
import Textarea from 'components/atoms/Textarea';
import Text from 'components/atoms/Text';
import gif from 'assets/icons/sticky-note-regular.svg';
import emoticon from 'assets/icons/smile-regular.svg';
import clip from 'assets/icons/paperclip-solid.svg';

const StyledBadgeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${lightborder};
  width: 100%;
  height: 97px;
  padding: 6px 8px;
`;

const StyledEmoticons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const FormPost = () => (
  <>
    <Text form>Treść posta nad kudosem</Text>
    <StyledBadgeWrapper>
      <StyledRightWrapper>
        <Textarea placeholder="Tresć posta..." />
        <StyledEmoticons>
          <Icon comment src={gif} />
          <Icon comment src={emoticon} />
          <Icon comment src={clip} />
        </StyledEmoticons>
      </StyledRightWrapper>
    </StyledBadgeWrapper>
  </>
);

export default FormPost;
