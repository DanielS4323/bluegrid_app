import React from "react";
import Layout from "./layout/Layout";
import Input from "./parts/Input";
import TextArea from "./parts/TextArea";
import Button from "./parts/Button";
import { saveInput } from "../services/saveInput";
import { saveContactForm } from "../services/saveContactForm";

function Form(props) {
  return (
    <Layout title="Contact">
      <div className="form">
        <Input
          fieldType="text"
          fieldPlaceholder="Enter Name"
          fieldOnChange={(e) => saveInput(e, props.SetName)}
        />

        <Input
          fieldPlaceholder="Enter Email"
          fieldOnChange={(e) => saveInput(e, props.SetEmail)}
        />
        <TextArea
          txtPlaceholder="Your Question?"
          txtRows="4"
          txtCols="30"
          txtOnChange={(e) => saveInput(e, props.SetTxtArea)}
        />

        <Button
          buttonOnSubmit={() =>
            saveContactForm(
              props.name,
              props.txtArea,
              props.email,
              props.SetContact,
              props.SetFormIsSuccess
            )
          }
          buttonTitle="Submit"
        />
      </div>
    </Layout>
  );
}

export default Form;
