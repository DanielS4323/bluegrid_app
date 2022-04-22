import React from 'react'
import Layout from '../components/layout/Layout'
import Input from '../components/parts/Input'
import TextArea from '../components/parts/TextArea'
import Button from '../components/parts/Button'

function Form(props) {
  return (
    <Layout>
     <h1>Contact</h1>
     <div className='form'>
   <Input 
          fieldType='text'
          fieldPlaceholder = 'Enter Name'
          fieldOnChange = {(e) => {props.saveName(e)}}
   /> 
   
   <Input 
          fieldType='email'
          fieldPlaceholder = 'Enter Email'
          fieldOnChange = {(e) => {props.saveEmail(e)}}
   /> 
   <TextArea 
    txtPlaceholder='Your Question?'
    txtRows = '4'
    txtCols = '30'
    txtOnChange = {(e) => {props.saveTxt(e)}}
   />
    
    <Button
    buttonOnSubmit = {props.saveArticle}
    buttonTitle = 'Submit'
    />
    </div>


   </Layout>
  )
}

export default Form