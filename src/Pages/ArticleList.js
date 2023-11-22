// Articles.js
import React from 'react';
import { useParams } from "react-router-dom";
import articles from './ArticleContent';

const ArticleList = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}

export default ArticleList;
