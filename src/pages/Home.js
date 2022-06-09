import React, { useState } from "react";
import Article from "../components/Article";
import CreateArticle from "../components/CreateArticle";
import EditArticle from "../components/EditArticle";
import Layout from "../components/layout/Layout";
import { ChangeTitleName } from "../services/ChangeTitleName";
import "../styles/home.css";

function Home(props) {
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");

  const [editId, SetEditId] = useState(null);
  const [edit, SetEdit] = useState(false);
  const [editArticle, SetEditArticle] = useState(null);

  ChangeTitleName("React Class");

  let pageContent = <p className="no-articles">No articles</p>;

  if (props.articles.length > 0) {
    pageContent = (
      <div className="article-container">
        {props.articles.map((article) => (
          <Article
            key={article.id}
            article={article}
            SetArticles={props.SetArticles}
            SetEdit={SetEdit}
            SetEditArticle={SetEditArticle}
            SetEditId={SetEditId}
          />
        ))}
      </div>
    );
  }

  return (
    <Layout title="Home">
      {pageContent}

      {!edit && (
        <CreateArticle
          title={title}
          content={content}
          SetTitle={SetTitle}
          SetContent={SetContent}
          articles={props.articles}
          SetArticles={props.SetArticles}
        />
      )}
      {edit && (
        <EditArticle
          articles={props.articles}
          SetArticles={props.SetArticles}
          editArticle={editArticle}
          title={title}
          content={content}
          SetTitle={SetTitle}
          SetContent={SetContent}
          editId={editId}
          SetEdit={SetEdit}
        />
      )}
    </Layout>
  );
}

export default Home;
