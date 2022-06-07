import React from "react";
import Input from "./parts/Input";
import Button from "./parts/Button";
import { saveInput } from "../services/saveInput";
import { saveArticle } from "../services/saveArticle";

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
            props.articles,
            props.SetArticles,
            props.SetTitle,
            props.SetContent
          )
        }
        buttonTitle="Submit"
      />
    </div>
  );
}

export default CreateArticle;
