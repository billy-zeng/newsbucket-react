import React from 'react';
import './ArticleList.css';

class ArticleList extends React.Component {

  displayArticles = articles => {
    console.log("[ArticleList] display teams")
    
    return articles.map((article, i)  => {
      return <li key={i}><a href={article.url}>{article.title}</a></li>
    });
  };

  render(){
    console.log(this.props)
    return(
      this.props.articles.length > 0
        ? <ul id="articlesList">{this.displayArticles(this.props.articles)}</ul>
        : <p>"No articles found, please try again."</p>
    )
  }
}

export default ArticleList;
