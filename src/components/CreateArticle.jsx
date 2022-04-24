import React from 'react'
import Input from './parts/Input'
import Button from './parts/Button'
import {saveTitle, saveContent, saveArticle} from '../services/HandleFunctions'



function CreateArticle(props) {
  return (
    <div className='create-article'>
    <Input 
    fieldType='text'
    fieldValue={props.title}
    fieldPlaceholder = 'Enter Title'
    fieldOnChange = {(e)=> saveTitle(e, props.SetTitle)}
    />
    <Input 
    fieldType='text'
    fieldValue={props.content}
    fieldPlaceholder = 'Enter Content'
    fieldOnChange = {(e) => saveContent(e, props.SetContent)}
    />
   
    <Button 
    buttonOnSubmit = {() => saveArticle(props.title, props.content,props.articles, props.SetArticles)}
    buttonTitle = 'Submit'/>
</div>
  )
}

export default CreateArticle