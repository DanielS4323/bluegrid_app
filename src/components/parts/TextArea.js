import React from "react";

function TextArea(props) {
  return (
    <textarea
      placeholder={props.txtPlaceholder}
      readOnly={props.txtRead}
      rows={props.txtRows}
      cols={props.txtCols}
      value={props.txtValue}
      ref={props.onRef}
      onChange={props.txtOnChange}
    />
  );
}

export default TextArea;
