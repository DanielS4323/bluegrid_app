import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import Footer from "../components/UI/Footer";
import { ChangeTitleName } from "../services/ChangeTitleName";
import ArticleContext from "../store/Article-Context/article-context";
import styles from './styles/Details.module.css'

function Details(props) {
  const articleCtx = useContext(ArticleContext)
  const {items} = articleCtx
  const { id, articleTitle } = useParams();
  const navigate = useNavigate();
  const detailedArticle = items.find(
    (article) => article.id === Number(id)
  );
  ChangeTitleName(`Article Details - ${articleTitle}`);

  return (
    <React.Fragment>
      <h1>Details</h1>

      {detailedArticle && (
        <div className={styles["article-details"]}>
          <p>ID: {detailedArticle.id}</p>
          <p>Title: {detailedArticle.title}</p>
          <p>Content: {detailedArticle.content}</p>
          <p>Date Created: {detailedArticle.date}</p>
          <Button
            btnClass="btn"
            buttonTitle="Home"
            buttonOnSubmit={() => navigate("/")}
          />
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default Details;
