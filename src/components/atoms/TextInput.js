import React from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import styled from 'styled-components';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import 'draft-js-mention-plugin/lib/plugin.css';

const StyledEditorWrapper = styled.div`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  color: ${({ theme }) => theme.gray};
  width: 100%;
  overflow: hidden;
  height: 82px;
  line-height: 1.2;
`;

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin();
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
    const plugins = [this.mentionPlugin];

    return (
      <>
        <StyledEditorWrapper>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Tresć posta..."
          />
          <MentionSuggestions onSearchChange={this.onSearchChange} suggestions={suggestions} />
        </StyledEditorWrapper>
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
