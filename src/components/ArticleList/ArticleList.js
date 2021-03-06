import React from 'react';
import ArticleCard from './ArticleCard/ArticleCard';

class ArticleList extends React.Component {

  displayArticles = articles => {
    return articles.map((article, i)  => {
      return (
        <ArticleCard article={article} key={i} />
      )
    });
  };

  render(){
    return(
      this.props.articles.length > 0
        ? <ul id="articlesList" className="align-items-center justify-content-center container">{this.displayArticles(this.props.articles)}</ul>
        : <p>No articles found, please try again.</p>
    )
  }
}

export default ArticleList;
