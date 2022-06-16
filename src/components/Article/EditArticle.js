import React, { useContext, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { saveInput } from "../../services/saveInput";
import styles from "./Create&EditArticle.module.css";
import ArticleContext from "../../store/Article-Context/article-context";

function EditArticle() {
  const articleCtx = useContext(ArticleContext);
  const {articleToEdit} =  articleCtx
  const [title, SetTitle] = useState(articleToEdit.title);
  const [content, SetContent] = useState(articleToEdit.content);
  const id = articleCtx.idToEdit;

  const cancelEditHandler = () => {
    articleCtx.cancelEditArticle();
  };

  const editArticle = () => {
    articleCtx.editArticle(title, content, id);
  };

  return (
    <div className={styles["edit-article"]}>
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

      <Button buttonOnSubmit={editArticle} buttonTitle="Edit" />

      <Button buttonTitle="Cancel" buttonOnSubmit={cancelEditHandler} />
    </div>
  );
}

export default EditArticle;
