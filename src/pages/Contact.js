import React, { useState } from "react";
import "../styles/contact.css";
import Form from "../components/Form";
import FormSuccess from "../components/FormSuccess";
import { ChangeTitleName } from "../services/ChangeTitleName";

function Contact(props) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [txtArea, SetTxtArea] = useState("");

  ChangeTitleName("Contact");

  const formToFill = 
    <Form
      name={name}
      email={email}
      txtArea={txtArea}
      SetContact={props.SetContact}
      SetFormIsSuccess={props.SetFormIsSuccess}
      SetName={SetName}
      SetEmail={SetEmail}
      SetTxtArea={SetTxtArea}
    />
  

  const formFilled =
    <FormSuccess
      name={props.contact.name}
      email={props.contact.email}
      txtArea={props.contact.question}
    />
  

  return (
    <>
      {!props.formIsSuccess && formToFill}
      {props.formIsSuccess && formFilled}
    </>
  );
}

export default Contact;
