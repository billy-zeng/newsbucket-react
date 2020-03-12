import React from 'react';
import './ArticleCard.css';

const ArticleCard = props => {
  return (
    <div className="col-md-10 mt-3 ml-5 pl-5 p-1 article-card align-self-center justify-self-center clearfix">
      <h5 className="ml-3"><a href={props.article.url}>{props.article.title}</a></h5>
        <div className="float-left">
          <img src={props.article.urlToImage} alt={props.article.title} className="article-image img-responsive thumb margin10 img-thumbnail" />
        </div>
          <p className="p-2">{props.article.content}</p>
          <div className="article-sources d-flex flex-column align-items-end justify-content-end">
            <small>Author: {props.article.author}</small>
            <small>Source: {props.article.source.name}</small>
          </div>
    </div>
  )
}

export default ArticleCard;
