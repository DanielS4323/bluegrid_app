import React, { useEffect, useState } from 'react'
import Input from './parts/Input'
import Button from './parts/Button'
import {saveTitle, saveContent, editArticle} from '../services/HandleFunctions'


function EditArticle(props) {
    
    const [title, SetTitle] = useState(props.editArticle.title)
    const [content, SetContent] = useState(props.editArticle.content)
    
    const id = props.editId

    useEffect(() => {
        SetTitle(props.editArticle.title)
        SetContent(props.editArticle.content)
    },[props.editArticle])


    

    

    


  return (
   <div className='edit-article'>
        <Input 
    fieldType='text'
    fieldValue={title}
    fieldPlaceholder = 'Enter Title'
    fieldOnChange = {(e)=> saveTitle(e, SetTitle)}
    />
    <Input 
    fieldType='text'
    fieldValue={content}
    fieldPlaceholder = 'Enter Content'
    fieldOnChange = {(e) => saveContent(e, SetContent)}
    />
   
    <Button 
    buttonOnSubmit = {() => editArticle(title,
                                        content,
                                        id,
                                        props.SetArticles,
                                        props.articles,
                                        props.SetEdit
                                        )}
    buttonTitle = 'Edit'/>


   </div>
  )
}

export default EditArticle