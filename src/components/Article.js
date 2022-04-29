import React from 'react'
import { Link } from "react-router-dom";
import Button from './parts/Button'
import {promptMessage} from '../services/Alerts'


function Article(props) {


  const handleEdit = () => {
    props.SetEditArticle(props.article)
    props.SetEditId(props.article.id)
    props.SetEdit(true)
  }
  return (
    
    <div className='article'>
                <Link to={`/details/${props.article.id}/${props.article.title}`}
                          className='title'>
                        <p className='title'>{props.article.title}</p>
                </Link>
            <p className='date'>{props.article.date}</p>
                <Button
                        btnClass = 'btn-delete'
                        buttonTitle = '&#x2715;'
                        buttonOnSubmit = {() => promptMessage(
                                                props.article,
                                                props.SetArticles,
                                                props.SetEdit
                                                              )
                                                              }/>
                <Button
                        btnClass = 'btn-edit'
                        buttonTitle = '&#x270E;'
                        buttonOnSubmit = {handleEdit}
                                                              />
    </div>
    
  )
}

export default Article