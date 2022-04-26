import { notEmpty } from "./Validate"
import {promptMessage} from './Alerts'




export const handleDelete = (object, SetState) => {
    SetState(prev => {
      let copy = [...prev]
      let index = copy.indexOf(object)
      copy.splice(index, 1)
      return copy
    })
}


export const saveTitle = (e, SetTitle) => {
    SetTitle(e.target.value)
} 
export const saveContent = (e, SetContent) => {
    SetContent(e.target.value)
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
