import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import emojiEditorStyles from './editorStyles/emojiEditorStyles.css';
import mentionsEditorStyles from './editorStyles/mentionsEditorStyles.css';
import hashtagEditorStyles from './editorStyles/hashtagEditorStyle.css';

const StyledEditorWrapper = styled.div`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.gray};
  width: 100%;
  overflow: hidden;
  height: 65px;
  line-height: 1.2;
`;

const StyledEmoticonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin();
    this.emojiPlugin = createEmojiPlugin();
    this.hashtagPlugin = createHashtagPlugin();
  }

  state = {
    editorState: EditorState.createEmpty(),
    // eslint-disable-next-line react/destructuring-assignment
    suggestions: this.props.persons,
  };

  onChange = editorState => {
    this.setState({ editorState });
  };

  onSearchChange = ({ value }) => {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      suggestions: defaultSuggestionsFilter(value, this.props.persons),
    });
  };

  render() {
    const { editorState, suggestions } = this.state;
    const { MentionSuggestions } = this.mentionPlugin;
    const { EmojiSuggestions, EmojiSelect } = this.emojiPlugin;
    const plugins = [this.mentionPlugin, this.emojiPlugin, this.hashtagPlugin];

    return (
      <>
        <StyledEditorWrapper
          className={
            (emojiEditorStyles.editor, mentionsEditorStyles.editor, hashtagEditorStyles.editor)
          }
        >
          <Editor editorState={editorState} onChange={this.onChange} plugins={plugins} />
          <MentionSuggestions onSearchChange={this.onSearchChange} suggestions={suggestions} />
          <EmojiSuggestions />
        </StyledEditorWrapper>
        <StyledEmoticonsWrapper>
          <EmojiSelect />
        </StyledEmoticonsWrapper>
      </>
    );
  }
}

TextInput.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};

TextInput.defaultProps = {
  persons: {},
};

export default TextInput;
