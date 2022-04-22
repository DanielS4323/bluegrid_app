import React from 'react'
import Layout from '../components/layout/Layout'
import Input from '../components/parts/Input'
import TextArea from '../components/parts/TextArea'

function FormSuccess(props) {
  return (
    <Layout>
            <div className='success'>
                  <Input
                    fieldType='text'
                    fieldRead = {true}
                    fieldValue = {props.name}
                  />
                  <Input
                    fieldType='email'
                    fieldRead = {true}
                    fieldValue = {props.email}
                  />
                  <TextArea
                    txtRead = {true}
                    txtValue = {props.txtArea}
                  />
                  <p className='success-p'>Thank you for contacting us.</p>
            </div>
        </Layout>
  )
}

export default FormSuccess