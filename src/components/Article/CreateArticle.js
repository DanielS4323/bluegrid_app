import React from "react";
import Input from "../parts/Input";
import Button from "../UI/Button";
import { saveInput } from "../../services/saveInput";
import { saveArticle } from "../../services/saveArticle";

function CreateArticle(props) {
  return (
    <div className="create-article">
      <Input
        fieldType="text"
        fieldValue={props.title}
        fieldPlaceholder="Enter Title"
        fieldOnChange={(e) => saveInput(e, props.SetTitle)}
      />
      <Input
        fieldType="text"
        fieldValue={props.content}
        fieldPlaceholder="Enter Content"
        fieldOnChange={(e) => saveInput(e, props.SetContent)}
      />
      <Button
        buttonOnSubmit={() =>
          saveArticle(
            props.title,
            props.content,
            props.SetArticles,
            props.SetContent,
            props.SetTitle
          )
        }
        buttonTitle="Submit"
      />
    </div>
  );
}

export default CreateArticle;
