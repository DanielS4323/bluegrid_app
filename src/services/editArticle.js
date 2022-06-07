import { notEmpty } from "./notEmpty";

export const editArticle = (
  title,
  content,
  id,
  SetArticles,
  articles,
  SetEdit
) => {
  let date = new Date();

  if (!notEmpty(title) && !notEmpty(content)) {
    let updatedArticle = {
      id: id,
      title: title,
      content: content,
      date: date.toLocaleString().slice(0, -3),
    };
    SetArticles(
      articles.map((article) => (article.id === id ? updatedArticle : article))
    );
  }

  SetEdit((prev) => !prev);
};
