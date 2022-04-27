import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/parts/Button'

function Details(props) {

    const {id} = useParams()
    const navigate = useNavigate()
    const detailedArticle = props.articles.find((article) => article.id === Number(id))
 
    
    
  return (
      <>
              <h1>Details</h1>
      {detailedArticle && 
            <div className='article-details'>
                <p>ID: {detailedArticle.id}</p>
                <p>Title: {detailedArticle.title}</p>
                <p>Content: {detailedArticle.content}</p>
                <p>Date Created: {detailedArticle.date}</p>
                <Button
                    btnClass = 'btn'
                    buttonTitle = 'Home'
                    buttonOnSubmit = {() => navigate('/')}
                />
            </div> }
      
      </>
  )
}

export default Details