import React from 'react';
import axios from 'axios';
import ArticleList from '../../components/ArticleList/ArticleList';

class ArticleContainer extends React.Component {
  state = {
    articles: []
  }

  getArticles() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/news/everything/${this.props.data.name}`)
      .then(res => {
        console.log(res.data.articles)
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount(){
    this.getArticles();
  }

  render() {
    console.log(this.props.data.name)
    console.log(this.state.articles)
    return (
      <ArticleList articles={this.state.articles} />
    )
  }
}

export default ArticleContainer;
