import React, { useEffect, useState } from "react";
import Input from "../parts/Input";
import Button from "../UI/Button";
import { saveInput } from "../../services/saveInput";
import { editArticle } from "../../services/editArticle";

function EditArticle(props) {
  const [title, SetTitle] = useState(props.editArticle.title);
  const [content, SetContent] = useState(props.editArticle.content);
  const id = props.editId;

  useEffect(() => {
    SetTitle(props.editArticle.title);
    SetContent(props.editArticle.content);
  }, [props.editArticle]);

  const cancelEdit = () => {
    props.SetEdit((prev) => !prev);
  };

  return (
    <div className="edit-article">
      <Input
        fieldType="text"
        fieldValue={title}
        fieldPlaceholder="Enter Title"
        fieldOnChange={(e) => saveInput(e, SetTitle)}
      />
      <Input
        fieldType="text"
        fieldValue={content}
        fieldPlaceholder="Enter Content"
        fieldOnChange={(e) => saveInput(e, SetContent)}
      />

      <Button
        buttonOnSubmit={() =>
          editArticle(
            title,
            content,
            id,
            props.SetArticles,
            props.articles,
            props.SetEdit
          )
        }
        buttonTitle="Edit"
      />

      <Button buttonTitle="Cancel" buttonOnSubmit={() => cancelEdit()} />
    </div>
  );
}

export default EditArticle;
