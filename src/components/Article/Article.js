import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { promptMessage } from "../../services/promptMessage";
import styles from "./Article.module.css";

function Article(props) {
  const handleEdit = () => {
    props.SetEditArticle(props.article);
    props.SetEditId(props.article.id);
    props.SetEdit(true);
  };
  return (
    <div className={styles.article}>
      <Link
        to={`/details/${props.article.id}/${props.article.title}`}
        className={styles.title}
      >
        <p className={styles.title}>{props.article.title}</p>
      </Link>
      <p className={styles.date}>{props.article.date}</p>
      <Button
        btnClass={styles["btn-delete"]}
        buttonTitle="&#x2715;"
        buttonOnSubmit={() =>
          promptMessage(props.article, props.SetArticles, props.SetEdit)
        }
      />
      <Button
        btnClass={styles["btn-edit"]}
        buttonTitle="&#x270E;"
        buttonOnSubmit={handleEdit}
      />
    </div>
  );
}

export default Article;
