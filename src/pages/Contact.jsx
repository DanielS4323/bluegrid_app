import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Input from '../components/parts/Input'
import TextArea from '../components/parts/TextArea'
import Button from '../components/parts/Button'
import { notEmpty, validateEmail } from '../services/Validate'
import { showMessage } from '../services/Alerts'
import '../styles/contact.css'
import Form from '../components/Form'
import FormSuccess from '../components/FormSuccess'


function Contact(props) {
  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [txtArea, SetTxtArea] = useState('')
  const [isSuccess, SetIsSucess] = useState(false)

  let newMessage = {}
  
  
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
          newMessage = {
          name: name, 
          email: email,
          question: txtArea
        }

        showMessage('Form successfully sent.','success','center',2000)

        SetIsSucess(true)

      } else {
        showMessage('Email not valid.', 'error','center', 2000)
      }

    } else {
      showMessage("Name or question area are empty.", "error", "center", 2000);
    }


    
  }
  
  
  

  return (
    <>
  
    {!isSuccess && 
    (<Form
          saveName={saveName}
          saveEmail={saveEmail}
          saveTxt={saveTxt}
          saveArticle={saveArticle}
   />)}

    {isSuccess && (
    <FormSuccess
          name={name}
          email={email}
          txtArea={txtArea}
    />
      
    )}
   </>
  )
}

export default Contact