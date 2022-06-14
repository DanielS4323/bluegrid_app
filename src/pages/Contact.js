import React, { useRef } from "react";
import { useContext } from "react";
import Form from "../components/ContactForm/Form";
import FormSuccess from "../components/ContactForm/FormSuccess";
import { ChangeTitleName } from "../services/ChangeTitleName";
import ContactContext from "../store/Contact-Context/contact-context";

function Contact() {
  const contactCtx = useContext(ContactContext);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const textInputRef = useRef();
  const {name, email, question} = contactCtx.contact

  ChangeTitleName("Contact");

  const formToFill = (
    <Form
      onSubmit={() =>
        contactCtx.saveContactForm(
          nameInputRef.current.value,
          textInputRef.current.value,
          emailInputRef.current.value
        )
      }
      saveName={nameInputRef}
      saveEmail={emailInputRef}
      saveText={textInputRef}
    />
  );

  const formFilled = (
    <FormSuccess
      name={name}
      email={email}
      txtArea={question}
    />
  );

  return (
    <React.Fragment>
      {!contactCtx.isFormSuccess && formToFill}
      {contactCtx.isFormSuccess && formFilled}
    </React.Fragment>
  );
}

export default Contact;
