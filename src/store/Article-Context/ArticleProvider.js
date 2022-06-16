import React, { useState } from "react";
import ArticleContext from "./article-context";
import { notEmpty } from "../../services/notEmpty";
import Swal from "sweetalert2";

const ArticleProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [editId, setEditId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editArticle, setEditArticle] = useState(null);

  const addNewArticleHandler = (title, content, setContent, setTitle) => {
    let date = new Date();
    if (!notEmpty(title) && !notEmpty(content)) {
      let newArticle = {
        id: Math.random(),
        title: title,
        content: content,
        date: date.toLocaleString().slice(0, -3),
      };

      setArticles((prev) => {
        return [newArticle].concat(prev);
      });
      setTitle("");
      setContent("");
    }
  };

  const editArticleHandler = (title, content, id) => {
    let date = new Date();

    if (!notEmpty(title) && !notEmpty(content)) {
      let updatedArticle = {
        id: id,
        title: title,
        content: content,
        date: date.toLocaleString().slice(0, -3),
      };
      setArticles(
        articles.map((article) =>
          article.id === id ? updatedArticle : article
        )
      );
    }

    setEdit(false);
  };

  const deleteArticleHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won`t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        setEdit(false);
        setArticles((prev) => {
          return prev.filter((article) => article.id !== id);
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const toggleEditHandler = (article) => {
    setEditArticle(article);
    setEditId(article.id);
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  const articleContext = {
    items: articles,
    totalItems: articles.length,
    idToEdit: editId,
    isForEdit: edit,
    articleToEdit: editArticle,
    addArticle: addNewArticleHandler,
    editArticle: editArticleHandler,
    toggleEditArticle: toggleEditHandler,
    cancelEditArticle: cancelEdit,
    deleteArticle: deleteArticleHandler,
  };

  return (
    <ArticleContext.Provider value={articleContext}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
