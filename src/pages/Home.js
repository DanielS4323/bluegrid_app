import React, { useState } from 'react'
import Article from '../components/Article'
import CreateArticle from '../components/CreateArticle'
import Layout from '../components/layout/Layout'
import { TitleName } from '../services/Hooks'
import '../styles/home.css'

function Home(props) {
  const [title, SetTitle] = useState('')
  const [content, SetContent] = useState('')

  const [editTitle, SetEditTitle] = useState('')
  const [editContent, SetEditContent] = useState('')
  const [edit, SetEdit] = useState(false)
  

  TitleName('React Class')
    

  return (
   <Layout>
      <h1>Home</h1>
      {props.articles.length === 0 && 
      <p className='no-articles'>No articles</p>}
    {props.articles.length > 0 && 
    <>
    
     <div className='article-container'>
     {props.articles.map((article) => 
     <Article
      key={article.id}
      article={article}
      SetArticles={props.SetArticles}
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
      articles={props.articles}
      SetArticles={props.SetArticles}
    />
   </Layout>
  )
}

export default Home