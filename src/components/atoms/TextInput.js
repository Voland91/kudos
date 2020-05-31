import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import createCounterPlugin from 'draft-js-counter-plugin';
import emojiEditorStyles from './editorStyles/emojiEditorStyles.css';
import mentionsEditorStyles from './editorStyles/mentionsEditorStyles.css';
import hashtagEditorStyles from './editorStyles/hashtagEditorStyles.css';
import counterEditorStyles from './editorStyles/counterEditorStyles.css';

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

const StyledCounterWrapper = styled.div`
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.gray};
  margin-top: 8px;
  width: 57px;
  text-align: right;
`;

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin();
    this.emojiPlugin = createEmojiPlugin();
    this.hashtagPlugin = createHashtagPlugin();
    this.counterPlugin = createCounterPlugin();
  }

  state = {
    editorState: EditorState.createEmpty(),
    // eslint-disable-next-line react/destructuring-assignment
    suggestions: this.props.persons,
    readOnly: false,
  };

  onChange = editorState => {
    this.setState({ editorState });

    const MAX_LENGTH = 500;
    const length = editorState.getCurrentContent().getPlainText('').length + 1;

    if (length <= MAX_LENGTH) {
      this.setState({ editorState }); // or this.setState({ editorState: editorState })
    } else {
      this.setState({ readOnly: true });
    }
  };

  onSearchChange = ({ value }) => {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      suggestions: defaultSuggestionsFilter(value, this.props.persons),
    });
  };

  render() {
    const { editorState, suggestions, readOnly } = this.state;
    const { MentionSuggestions } = this.mentionPlugin;
    const { EmojiSuggestions, EmojiSelect } = this.emojiPlugin;
    const { CharCounter } = this.counterPlugin;
    const plugins = [this.mentionPlugin, this.emojiPlugin, this.hashtagPlugin, this.counterPlugin];

    return (
      <>
        <StyledEditorWrapper
          className={
            (emojiEditorStyles.editor,
            mentionsEditorStyles.editor,
            hashtagEditorStyles.editor,
            counterEditorStyles.editor)
          }
        >
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            plugins={plugins}
            readOnly={readOnly}
          />
          <MentionSuggestions onSearchChange={this.onSearchChange} suggestions={suggestions} />
          <EmojiSuggestions />
        </StyledEditorWrapper>
        <StyledEmoticonsWrapper>
          <EmojiSelect />
          <StyledCounterWrapper>
            <CharCounter limit={500} />
            /500
          </StyledCounterWrapper>
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
