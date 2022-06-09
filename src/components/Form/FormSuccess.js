import React from "react";
import Layout from "../layout/Layout";
import Input from "../parts/Input";
import TextArea from "../parts/TextArea";

function FormSuccess(props) {
  return (
    <Layout title="Contact">
      <div className="success">
        <Input fieldType="text" fieldRead={true} fieldValue={props.name} />
        <Input fieldType="email" fieldRead={true} fieldValue={props.email} />
        <TextArea txtRead={true} txtValue={props.txtArea} />
        <p className="success-p">Thank you for contacting us.</p>
      </div>
    </Layout>
  );
}

export default FormSuccess;
