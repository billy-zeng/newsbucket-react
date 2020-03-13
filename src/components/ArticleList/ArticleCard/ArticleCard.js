import React from 'react';
import './ArticleCard.css';

class ArticleCard extends React.Component {
  formatDate = date => {
    const newDate = new Date(date);
    return (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' +  newDate.getFullYear();
  }

  render(){
    this.formatDate();
    return (
      <div className="col-md-10 mt-3 ml-5 pl-5 p-1 article-card align-self-center justify-self-center clearfix">
        <h5 className="ml-3"><a href={this.props.article.url}>{this.props.article.title}</a></h5>
          <div className="float-left">
            <img src={this.props.article.urlToImage} alt={this.props.article.title} className="article-image img-responsive thumb margin10 img-thumbnail" />
          </div>
            <p className="p-2 article-description">{this.props.article.description}</p>
            <p className="article-content">{this.props.article.content}</p>
            <div className="article-sources d-flex flex-column align-items-end justify-content-end">
              <small>Source: {this.props.article.source.name}</small>
              <small>Author: {this.props.article.author}</small>
              <small>Date: {this.formatDate(this.props.article.publishedAt)}</small>
            </div>
      </div>
    )
  }
}

export default ArticleCard;
