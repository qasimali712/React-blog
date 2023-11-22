import React from 'react';
//import { Link } from 'react-router-dom';
import articles from './ArticleContent';
import ArticlesList from '../Components/ArtclesList';
const Articles = () => {
    return (
        <>
            <h1>Articles</h1>
           <ArticlesList articles={articles}/>
        </>
    );
}

export default Articles;
