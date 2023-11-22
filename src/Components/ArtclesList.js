import React from 'react';
import { Link } from 'react-router-dom';
//import articles from './ArticleContent';

const ArticlesList = ({articles}) => {
    return (
        <>
            {articles.map(art => (
                <Link className='article-list-item' key={art.name} to={`/articles/${art.name}`}>
                    <h3>{art.title}</h3>
                    <p>{art.content.substring(0,150)}...</p>
                </Link>
            ))}
        </>
    );
}

export default ArticlesList;
