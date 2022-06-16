import React, { useState, useContext } from "react";
import Article from "../components/Article/Article";
import CreateArticle from "../components/Article/CreateArticle";
import EditArticle from "../components/Article/EditArticle";
import Layout from "../components/layout/Layout";
import { ChangeTitleName } from "../services/ChangeTitleName";
import ArticleContext from "../store/Article-Context/article-context";
import styles from "./styles/Home.module.css";

function Home() {
  const articleCtx = useContext(ArticleContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  ChangeTitleName("React Class");

  let pageContent = <p className={styles["no-articles"]}>No articles</p>;

  if (articleCtx?.totalItems > 0) {
    pageContent = (
      <div className={styles["article-container"]}>
        {articleCtx.items.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }

  return (
    <Layout title="Home">
      {pageContent}

      {!articleCtx?.isForEdit && (
        <CreateArticle
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
        />
      )}
      {articleCtx.isForEdit && (
        <EditArticle setTitle={setTitle} setContent={setContent} />
      )}
    </Layout>
  );
}

export default Home;
