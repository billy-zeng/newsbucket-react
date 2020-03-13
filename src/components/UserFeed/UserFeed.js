import React from 'react';
import axios from 'axios';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';

class UserFeed extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    searchTerms: null,
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
        const concatArr = res.data.players.concat(res.data.teams)
        console.log(concatArr)
        this.setState({
          searchTerms: concatArr
        });
      })
      .catch(err => console.log(err.response))
  }
  
  componentDidMount(){
    this.getUser();
  }

  render(){
    return (
      this.state.searchTerms && this.displayArticleLists(this.state.searchTerms)
    )
  }
}

export default UserFeed;
