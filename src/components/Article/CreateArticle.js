import React, { useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { saveInput } from "../../services/saveInput";
import styles from "./Create&EditArticle.module.css";
import ArticleContext from "../../store/Article-Context/article-context";

function CreateArticle(props) {
  const articleCtx = useContext(ArticleContext);

  const saveArticlehandler = () => {
    articleCtx.addArticle(
      props.title,
      props.content,
      props.setContent,
      props.setTitle
    );

  }

  return (
    <div className={styles["create-article"]}>
      <Input
        fieldType="text"
        fieldValue={props.title}
        fieldPlaceholder="Enter Title"
        fieldOnChange={(e) => saveInput(e, props.setTitle)}
      />
      <Input
        fieldType="text"
        fieldValue={props.content}
        fieldPlaceholder="Enter Content"
        fieldOnChange={(e) => saveInput(e, props.setContent)}
      />
      <Button buttonOnSubmit={saveArticlehandler} buttonTitle="Submit" />
    </div>
  );
}

export default CreateArticle;
