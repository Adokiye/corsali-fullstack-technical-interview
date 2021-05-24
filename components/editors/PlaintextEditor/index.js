import React, { useState } from "react";
import PropTypes from "prop-types";

import * as Showdown from "showdown";
import ReactMde from "react-mde";

import css from "../style.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

function PlaintextEditor({ file, write }) {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState('write');

  const reader = new FileReader();
  reader.onload = function(event) {
      var contents = event.target.result;
      setValue(contents);
  };

  reader.onerror = function(event) {
      console.error("File could not be read! Code " + event.target.error.code);
  };

  reader.readAsText(file);

  const save = (input) => {
    const temp = new File(
      [input],
      file.name,
      {
        type: "text/plain",
        lastModified: new Date()
      });

    setValue(input);
    write(temp);
  };

  const selectTab = (tab) =>  tab == 'write' ? setSelectedTab('write') : setSelectedTab('preview');

  const classes = {
    textArea:css.customTextArea
   }

  return (
    <div className={css.editor}>
      <ReactMde
        value={value}
        onChange={save}
        selectedTab={selectedTab}
        onTabChange={selectTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;