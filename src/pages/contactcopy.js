import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Input from '../components/parts/Input'
import TextArea from '../components/parts/TextArea'
import Button from '../components/parts/Button'
import { notEmpty, validateEmail } from '../services/Validate'
import { showMessage } from '../services/Alerts'
import '../styles/contact.css'

function Contact() {
  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [txtArea, SetTxtArea] = useState('')
  const [articles, SetArticles] = useState([])
  const [isSuccess, SetisSucess] = useState(false)

  let date = new Date()
  
  const saveName = (e) => {
      SetName(e.target.value)
  }
  const saveEmail = (e) => {
      SetEmail(e.target.value)
  }
  const saveTxt = (e) => {
      SetTxtArea(e.target.value)
  }



  
  const saveArticle = () => {
    if(!notEmpty(name) && !notEmpty(txtArea)) {
      if(!notEmpty(email) && validateEmail(email)) {
        let newArticle = {
          name: name, 
          email: email,
          question: txtArea,
          dateCreated: date.toDateString(),
          timeCreated: date.toTimeString()
        }
        SetArticles([...articles, newArticle])

        showMessage('Note successfully created.','success','center',2000)


      } else {
        showMessage('Email not valid.', 'error','center', 2000)
      }

    } else {
      showMessage("Name or question area are empty.", "error", "center", 2000);
    }


    
  }
  
  
  // console.log(articles);

  return (
    <Layout>
     <h1>Contact</h1>
     <div className='form'>
   <Input 
          fieldType='text'
          fieldPlaceholder = 'Enter Name'
          fieldOnChange = {(e) => {saveName(e)}}
   /> 
   
   <Input 
          fieldType='email'
          fieldPlaceholder = 'Enter Email'
          fieldOnChange = {(e) => {saveEmail(e)}}
   /> 
   <TextArea 
    txtPlaceholder='Your Question?'
    txtRows = '4'
    txtCols = '30'
    txtOnChange = {(e) => {saveTxt(e)}}
   />
    
    <Button
    buttonOnSubmit = {saveArticle}
    buttonTitle = 'Submit'
    />
    </div>


   </Layout>
  )
}

export default Contact