import React from 'react'


const ContactContext = React.createContext({
    name : '',
    email: '',
    question: '',
    isFormSuccess: false,
    saveContactForm: (name, email, question) => {}
})

export default ContactContext