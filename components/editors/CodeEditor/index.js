import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from "../style.css";

const Editor = props => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('ace-builds/src-noconflict/mode-javascript');
    require('ace-builds/src-noconflict/mode-json');
    require('ace-builds/src-noconflict/ext-language_tools');
    require('ace-builds/src-noconflict/theme-monokai');
    return <Ace {...props} />;
  }
  return null;
};

const CodeEditor = ({ file, write }) => {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState('');
  const [type, setType] = useState('')

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = function(event) {
      let contents = event.target.result;
      setMode(file.type.split('/')[1]);
      setType(file.type)
      setValue(contents);
      console.log(value);
    };

    reader.onerror = function(event) {
      console.error('File could not be read! Code ' + event.target.error.code);
    };

    reader.readAsText(file);
  }, [file]);

  const save = (input) => {
    const temp = new File(
      [input],
      file.name,
      {
        type: type,
        lastModified: new Date()
      });

    setValue(input);
    write(temp);
  };

  return mode ? (
    <div className={css.editor}>
    <Editor
      placeholder="Corsali placeholder"
      mode={mode}
      theme="monokai"
      name="corsali-code-editor"
      fontSize={14}
      onChange={save}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={value}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2
      }}
    /></div>
  ) : (
    <div />
  );
};
CodeEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};
// Render editor
export default CodeEditor;
