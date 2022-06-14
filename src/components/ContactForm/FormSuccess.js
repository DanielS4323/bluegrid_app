import React from "react";
import Layout from "../layout/Layout";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import styles from "./Forms.module.css";

function FormSuccess(props) {
  return (
    <Layout title="Contact">
      <div className={styles.success}>
        <Input fieldType="text" fieldRead={true} fieldValue={props.name} />
        <Input fieldType="email" fieldRead={true} fieldValue={props.email} />
        <TextArea txtRead={true} txtValue={props.txtArea} />
        <p className={styles["success-p"]}>Thank you for contacting us.</p>
      </div>
    </Layout>
  );
}

export default FormSuccess;
