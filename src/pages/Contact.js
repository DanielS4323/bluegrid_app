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
import { TitleName } from '../services/Hooks'


function Contact(props) {
  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [txtArea, SetTxtArea] = useState('')

  
  
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
         let newMessage = {
          name: name, 
          email: email,
          question: txtArea
        }
        props.SetContact(newMessage)

        showMessage('Form successfully sent.','success','center',2000)

        props.SetIsSucess(true)

      } else {
        showMessage('Email not valid.', 'error','center', 2000)
      }

    } else {
      showMessage("Name or question area are empty.", "error", "center", 2000);
    }


    
  }
  
  
    TitleName('Contact')

  return (
    <>
  
    {!props.isSuccess && 
    (<Form
          saveName={saveName}
          saveEmail={saveEmail}
          saveTxt={saveTxt}
          saveArticle={saveArticle}
   />)}

    {props.isSuccess && (
    <FormSuccess
          name={props.contact.name}
          email={props.contact.email}
          txtArea={props.contact.question}
    />
      
    )}
   </>
  )
}

export default Contact