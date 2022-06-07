import { notEmpty } from "./notEmpty";

export const saveArticle = (
  title,
  content,
  SetArticles,
  SetContent,
  SetTitle
) => {
  let date = new Date();
  if (!notEmpty(title) && !notEmpty(content)) {
    let newArticle = {
      id: Math.random(),
      title: title,
      content: content,
      date: date.toLocaleString().slice(0, -3),
    };
    SetArticles((prev) => [...prev, newArticle]);

    SetTitle("");
    SetContent("");
  }
};
