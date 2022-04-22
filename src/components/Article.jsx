import React from 'react'
import Button from './parts/Button'

function Article(props) {
  return (
    <div className='article'>
        <p className='title'>{props.article.title}</p>
        <p className='date'>{props.article.date}</p>
        <Button
        btnClass = 'btn-delete'
        buttonTitle = '&#x2715;'
        />
        <Button
        btnClass = 'btn-edit'
        buttonTitle = '&#x270E;'
        />
    </div>
  )
}

export default Article