import React, { useState } from 'react'
import Article from '../components/Article'
import CreateArticle from '../components/CreateArticle'
import Layout from '../components/layout/Layout'
import Button from '../components/parts/Button'
import Input from '../components/parts/Input'
import { notEmpty } from '../services/Validate'
import '../styles/home.css'

function Home() {
  const [articles, SetArticles] = useState([])
  const [title, SetTitle] = useState('')
  const [content, SetContent] = useState('')

  const [editTitle, SetEditTitle] = useState('')
  const [editContent, SetEditContent] = useState('')
  const [edit, SetEdit] = useState(false)
  


  

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
      SetArticles={SetArticles}
      SetEditTitle={SetEditTitle}
      SetEditContent={SetEditContent}
      SetEdit={SetEdit}
     />)}
     </div>
     </>
    }

    <CreateArticle 
      title={title}
      content={content}
      SetTitle={SetTitle}
      SetContent={SetContent}
      articles={articles}
      SetArticles={SetArticles}
    />

     {/* <div className='create-article'>
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
     </div> */}
   </Layout>
  )
}

export default Home