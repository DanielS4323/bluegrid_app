import React from 'react'
import { Link } from "react-router-dom";
import Button from './parts/Button'
import { handleDelete } from '../services/HandleFunctions'
import {promptMessage} from '../services/Alerts'


function Article(props) {


  const handleEdit = () => {
    props.SetEditArticle(props.article)
    props.SetEditId(props.article.id)
    props.SetEdit(true)
  }
  


  return (
    
    <div  className='article'>
        <Link to={`/details/${props.article.id}`}
         className='title'>
           <p className='title'>{props.article.title}</p>
         </Link>
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