import React, { useRef } from "react";
import Form from "../components/ContactForm/Form";
import FormSuccess from "../components/ContactForm/FormSuccess";
import { ChangeTitleName } from "../services/ChangeTitleName";
import { saveContactForm } from "../services/saveContactForm";

function Contact(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const textInputRef = useRef();

  ChangeTitleName("Contact");

  const formToFill = (
    <Form
      onSubmit={() =>
        saveContactForm(
          nameInputRef.current.value,
          textInputRef.current.value,
          emailInputRef.current.value,
          props.SetContact,
          props.SetFormIsSuccess
        )
      }
      saveName={nameInputRef}
      saveEmail={emailInputRef}
      saveText={textInputRef}
    />
  );

  const formFilled = (
    <FormSuccess
      name={props.contact.name}
      email={props.contact.email}
      txtArea={props.contact.question}
    />
  );

  return (
    <>
      {!props.formIsSuccess && formToFill}
      {props.formIsSuccess && formFilled}
    </>
  );
}

export default Contact;
