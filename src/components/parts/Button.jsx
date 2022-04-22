import React from 'react'

function Button(props) {
  return (
    <button
        onClick={props.buttonOnSubmit}>
        {props.buttonTitle}
    </button>
  )
}

export default Button