import React from 'react';
import axios from 'axios';
import ArticleList from '../ArticleList/ArticleList';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';

class UserFeed extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    searchTerms: null,
    // articles: null,
  }

  displayArticleLists = items => {
    console.log("[UserFeed] calling on ArticleContainer")

    return items.map((item, i) => {
      return (
        <ArticleContainer data={item} key={i} />
      )
    })
  }

  getUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
      .then(res => {
        console.log(res.data)
        const concatArr = (res.data.players).concat(res.data.teams)
        this.setState({
          searchTerms: concatArr
        });
      })
      .catch(err => console.log(err.response))
  }

  // getUserArticles = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/news/userfeed/${this.state.userId}`, {withCredentials: true})
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         articles: res.data.articles
  //       });
  //     })
  //     .catch(err => console.log(err.response))
  // }
  
  componentDidMount(){
    this.getUser();
    // this.getUserArticles();
  }

  render(){
    return (
      this.state.searchTerms && this.displayArticleLists(this.state.searchTerms)
      // this.state.articles && <ArticleList articles={this.state.articles} />
    )
  }
}

export default UserFeed;
