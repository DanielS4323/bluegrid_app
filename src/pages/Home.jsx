import React, { useState } from 'react'
import Article from '../components/Article'
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
        id: articles.length + 1, 
        title: title,
        content: content,
        date: date.toLocaleString().slice(0, -3)
      }
      SetArticles(prev => [...prev, newArticle])
    }
  }

    console.log(articles);


  return (
   <Layout>
      <h1>Home</h1>
      {articles.length === 0 && 
      <p className='no-articles'>No articles</p>}
    {articles.length > 0 && 
    <>
    
     <div className='article-container'>
     {articles.map((article, index) => 
     <Article
      key={article.id}
      article={article}
     />)}
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