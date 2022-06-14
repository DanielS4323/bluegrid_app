import React from "react";
import Layout from "../layout/Layout";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";
import styles from './Forms.module.css'

function Form(props) {
  return (
    <Layout title="Contact">
      <div className={styles.form}>
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
