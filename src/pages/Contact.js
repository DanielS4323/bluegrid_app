import React, { useRef, useState } from "react";
import "../styles/contact.css";
import Form from "../components/Form";
import FormSuccess from "../components/FormSuccess";
import { ChangeTitleName } from "../services/ChangeTitleName";
import { saveContactForm } from "../services/saveContactForm";
import { saveInput } from "../services/saveInput";

function Contact(props) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [txtArea, SetTxtArea] = useState("");


  ChangeTitleName("Contact");

  const formToFill = (
    <Form
      onSubmit={() =>
        saveContactForm(
          name,
          txtArea,
          email,
          props.SetContact,
          props.SetFormIsSuccess
        )
      }
      saveName={(e) => saveInput(e, SetName)}
      saveEmail={(e) => saveInput(e, SetEmail)}
      saveText={(e) => saveInput(e, SetTxtArea)}
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
