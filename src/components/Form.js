import React from "react";
import Layout from "./layout/Layout";
import Input from "./parts/Input";
import TextArea from "./parts/TextArea";
import Button from "./parts/Button";

function Form(props) {
  return (
    <Layout title="Contact">
      <div className="form">
        <Input
          fieldType="text"
          fieldPlaceholder="Enter Name"
          onRef={props.saveName}
        />

        <Input fieldPlaceholder="Enter Email" onRef={props.saveEmail} />
        <TextArea
          txtPlaceholder="Your Question?"
          txtRows="4"
          txtCols="30"
          onRef={props.saveText}
        />

        <Button buttonOnSubmit={props.onSubmit} buttonTitle="Submit" />
      </div>
    </Layout>
  );
}

export default Form;
