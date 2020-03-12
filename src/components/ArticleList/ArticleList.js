import React from 'react';
import './ArticleList.css';
import ArticleCard from './ArticleCard/ArticleCard';

class ArticleList extends React.Component {

  // displayArticles = articles => {
  //   console.log("[ArticleList] display teams")
    
  //   return articles.map((article, i)  => {
  //     return <li key={i}><a href={article.url}>{article.title}</a></li>
  //   });
  // };

  displayArticles = articles => {
    console.log("[ArticleList] display teams")
    
    return articles.map((article, i)  => {
      return (
        <ArticleCard article={article} key={i} />
        // <div key={i} className="col-md-10 mt-3 ml-5 pl-5 p-1 article-card align-self-center justify-self-center clearfix">
        //   <h5 className="ml-3"><a href={article.url}>{article.title}</a></h5>
        //     <div className="float-left">
        //       <img src={article.urlToImage} alt={article.title} className="article-image img-responsive thumb margin10 img-thumbnail" />
        //     </div>
        //       <p className="p-2">
        //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        //         ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
        //         five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        //         of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        //         Lorem Ipsum.    
        //       </p>
        // </div>
      )
    });
  };

  render(){
    console.log(this.props)
    return(
      this.props.articles.length > 0
        ? <ul id="articlesList" className="align-items-center justify-content-center container">{this.displayArticles(this.props.articles)}</ul>
        : <p>"No articles found, please try again."</p>
    )
  }
}

export default ArticleList;
