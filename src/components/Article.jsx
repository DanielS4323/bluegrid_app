import React from 'react'
import Button from './parts/Button'
import { handleDelete } from '../services/HandleFunctions'
import {promptMessage} from '../services/Alerts'


function Article(props) {


  const handleEdit = () => {
    props.SetEditTitle(props.article.title)
    props.SetEditContent(props.article.content)
    props.SetEdit(true)
  }
  


  return (
    <div className='article'>
        <p className='title'>{props.article.title}</p>
        <p className='date'>{props.article.date}</p>
        <Button
        btnClass = 'btn-delete'
        buttonTitle = '&#x2715;'
        buttonOnSubmit = {() => 
          promptMessage(
            'Are you sure?',
            'You won`t be able to revert this!',
            'warning',
             props.article,
             props.SetArticles,
            'Deleted!',
            'Your file has been deleted.',
            'success')
        }
        />
        <Button
        btnClass = 'btn-edit'
        buttonTitle = '&#x270E;'
        buttonOnSubmit = {handleEdit}
        />
    </div>
  )
}

export default Article