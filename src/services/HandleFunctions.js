import { notEmpty, validateEmail } from "./Validate"
import {showMessage} from './Alerts'
import { useNavigate } from "react-router-dom"





export const handleDelete = (object, SetState) => {
    SetState(prev => {
      let copy = [...prev]
      let index = copy.indexOf(object)
      copy.splice(index, 1)
      return copy
    })
}


export const saveInput = (e, SetTitle) => {
    SetTitle(e.target.value)
} 


export const saveArticle = (title, content,articles, SetArticles, SetContent, SetTitle) => {
  let date = new Date()
  if(!notEmpty(title) && !notEmpty(content)) {
    let newArticle = {
      id: articles.length + 1, 
      title: title,
      content: content,
      date: date.toLocaleString().slice(0, -3)
    }
    SetArticles(prev => [...prev, newArticle])

    SetTitle('')
    SetContent('')

  } 
}


export const editArticle = (title, content,id, SetArticles, articles,SetEdit) => {
     let date = new Date()

     if(!notEmpty(title) && !notEmpty(content)) {
      let updatedArticle = {
        id: id, 
        title: title,
        content: content,
        date: date.toLocaleString().slice(0, -3)
      }
      SetArticles(articles.map((article) => article.id === id ? updatedArticle : article))

    }
    
    SetEdit((prev)=> !prev)

}


export 
const saveContactForm = (name, txtArea, email, SetContact, SetIsSuccess) => {
  if(!notEmpty(name) && !notEmpty(txtArea)) {
    if(!notEmpty(email) && validateEmail(email)) {
       let newMessage = {
        name: name, 
        email: email,
        question: txtArea
      }
        SetContact(newMessage)

      showMessage('Form successfully sent.','success','center',2000)

      SetIsSuccess(true)

    } else {
      showMessage('Email not valid.', 'error','center', 2000)
    }

  } else {
    showMessage("Name or question area are empty.", "error", "center", 2000);
  }}

