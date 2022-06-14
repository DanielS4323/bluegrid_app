import React, { useState } from "react";
import ContactContext from "./contact-context";
import { saveContactForm } from "../../services/saveContactForm";

const ContactProvider = (props) => {
  const [contact, setContact] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  const addNewContact = (name, txtArea, email) => {
    saveContactForm(name, txtArea, email, setContact, setFormSuccess);
  };

  const contactContext = {
    contact: contact,
    isFormSuccess: formSuccess,
    saveContactForm: addNewContact,
  };

  return (
    <ContactContext.Provider value={contactContext}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
