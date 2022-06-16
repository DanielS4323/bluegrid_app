import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./Article.module.css";
import ArticleContext from "../../store/Article-Context/article-context";


function Article(props) {
    const articleCtx = useContext(ArticleContext)
  

  const handleEdit = () => {
  articleCtx.toggleEditArticle(props.article)
  };

  const handleDelete = () => {
    articleCtx.deleteArticle(props.article.id)
  }
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
        buttonOnSubmit={handleDelete}
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
