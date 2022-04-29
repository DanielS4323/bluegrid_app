import React, { useState } from 'react'
import '../styles/contact.css'
import Form from '../components/Form'
import FormSuccess from '../components/FormSuccess'
import { TitleName } from '../services/Hooks'



function Contact(props) {


  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [txtArea, SetTxtArea] = useState('')

  
  
  TitleName('Contact')

  return (
    <>
  
    {!props.formIsSuccess && 
    (<Form
          name={name}
          email={email}
          txtArea={txtArea}
          SetContact = {props.SetContact}
          SetFormIsSuccess = {props.SetFormIsSuccess}
          SetName={SetName}
          SetEmail={SetEmail}
          SetTxtArea={SetTxtArea}

    />)}

    {props.formIsSuccess && 
    (<FormSuccess
          name={props.contact.name}
          email={props.contact.email}
          txtArea={props.contact.question}
      />
      
    )}
   </>
  )
}

export default Contact