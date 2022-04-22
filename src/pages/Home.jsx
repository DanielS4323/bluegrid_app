import { isEditable } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/parts/Button'
import Input from '../components/parts/Input'
import { notEmpty } from '../services/Validate'
import '../styles/home.css'

function Home() {
  const [articles, SetArticles] = useState([])
  const [title, SetTitle] = useState('')
  const [content, SetContent] = useState('')
  let date = new Date()

  const saveTitle = (e) => {
      SetTitle(e.target.value)
  } 
  const saveContent = (e) => {
      SetContent(e.target.value)
  } 

  const saveArticle = () => {
    if(!notEmpty(title) && !notEmpty(content)) {
      let newArticle = {
        title: title,
        content: content,
        date: date.toDateString(),
        time: date.toTimeString()
      }
      SetArticles([...articles, newArticle])
    }
  }



  return (
   <Layout>
      <h1>Home</h1>
      {articles.length === 0 && 
      <p>No articles</p>}
    {articles.length > 0 && 
    <>
    
     <div className='articles'>
      <p>artikli</p>

     </div>
     </>
    }

     <div className='create-article'>
            <Input 
            fieldType='text'
            fieldValue={title}
            fieldPlaceholder = 'Enter Title'
            fieldOnChange = {saveTitle}
            />
            <Input 
            fieldType='text'
            fieldValue={content}
            fieldPlaceholder = 'Enter Content'
            fieldOnChange = {saveContent}
            />
           
            <Button 
            buttonOnSubmit = {saveArticle}
            buttonTitle = 'Submit'/>
     </div>
   </Layout>
  )
}

export default Home