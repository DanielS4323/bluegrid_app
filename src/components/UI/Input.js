import React from "react";

function Input(props) {
  return (
    <input
      type={props.fieldType}
      readOnly={props.fieldRead}
      value={props.fieldValue}
      placeholder={props.fieldPlaceholder}
      onChange={props.fieldOnChange}
      ref={props.onRef}
    />
  );
}

export default Input;
