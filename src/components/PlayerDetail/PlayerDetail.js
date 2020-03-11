import React from 'react';
import axios from 'axios';

class PlayerDetail extends React.Component {
  state = {
    playerData: "",
    articles: []
  }

  getTeamData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/players/${this.props.match.params.playerId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          playerData: res.data
        }, ()=> {
          this.getTeamArticles();
        });        
      })
      .catch(err => console.log(err.response))
  }

  getTeamArticles() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/news/everything/${this.state.playerData.name}`)
      .then(res => {
        console.log(res.data.articles)
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getTeamData();
  }

  render() {
    console.log(this.props.match.params.playerId)
    console.log(this.state)
    return(
      <div id="playerCard">
        <h1>{this.state.playerData.name} | {this.state.playerData.jerseyNumber}</h1>
        <img src={this.state.playerData.image} alt={this.state.playerData.name} />
        {this.state.articles.length > 0 ? 
          <ul id="articlesList">
            <li><a href={this.state.articles[0].url}>{this.state.articles[0].title}</a></li>
            <li><a href={this.state.articles[1].url}>{this.state.articles[1].title}</a></li>
            <li><a href={this.state.articles[2].url}>{this.state.articles[2].title}</a></li>
            <li><a href={this.state.articles[3].url}>{this.state.articles[3].title}</a></li>
            <li><a href={this.state.articles[4].url}>{this.state.articles[4].title}</a></li>
          </ul>
          : "No articles found, please try again."}
      </div>
    )
  }
}

export default PlayerDetail;
