import React from 'react';


const ArticleContext = React.createContext({
    items: [],
    totalItems: 0,
    idToEdit: null,
    isForEdit: false,
    articleToEdit: null,
    addArticle: (title, content) => {},
    editArticle: (id) => {},
    deleteArticle: (id) => {},
})

export default ArticleContext