import CodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ title, language, value, setValue, icon }) => {
  const onChange = React.useCallback((value, viewUpdate) => {
    setValue(value);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className={`editor-panel ${open ? "expand" : ""}`}>
      <div className="header">
        <div className="title">
          <FontAwesomeIcon icon={icon} />
          <h3>{title}</h3>
        </div>
        <button
          className="expand-collapsed-btn"
          title="Expand the current section"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        </button>
      </div>
      <div className="editor-body">
        <CodeMirror
          value={value}
          height="100%"
          theme={okaidia}
          extensions={[language]}
          onChange={onChange}
          maxWidth="600px"
          className="codemirror-custom-editor"
          placeholder={`Start typing the ${title} code`}
          basicSetup={{
            lineNumbers: true,
            autocompletion: true,
            mode: language,
            foldGutter: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            bracketMatching: true,
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
