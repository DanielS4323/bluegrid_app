import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import Footer from "../components/UI/Footer";
import { ChangeTitleName } from "../services/ChangeTitleName";

function Details(props) {
  const { id, articleTitle } = useParams();
  const navigate = useNavigate();
  const detailedArticle = props.articles.find(
    (article) => article.id === Number(id)
  );
  ChangeTitleName(`Article Details - ${articleTitle}`);

  return (
    <>
      <h1>Details</h1>

      {detailedArticle && (
        <div className="article-details">
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
    </>
  );
}

export default Details;
