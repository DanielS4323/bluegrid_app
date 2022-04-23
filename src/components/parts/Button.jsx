import React from 'react'

function Button(props) {
  return (
      <button
          className={props.btnClass}
          onClick={props.buttonOnSubmit}
          >{props.buttonTitle}
      </button>
  )
}

export default Button