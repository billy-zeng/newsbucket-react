import React from 'react';
import axios from 'axios';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';

class TeamDetail extends React.Component {
  state = {
    teamData: "",
    // articles: []
  }

  getTeamData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/teams/${this.props.match.params.teamId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          teamData: res.data
        }
        // , ()=> {
        //   this.getTeamArticles();
        // }
        );        
      })
      .catch(err => console.log(err.response))
  }

  // getTeamArticles() {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/news/everything/${this.state.teamData.name}`)
  //     .then(res => {
  //       console.log(res.data.articles)
  //       this.setState({
  //         articles: res.data.articles
  //       });
  //     })
  //     .catch(err => console.log(err.response))
  // }

  componentDidMount() {
    this.getTeamData();
  }

  render() {
    console.log(this.props.match.params.teamId)
    console.log(this.state)
    return(
      <div id="teamCard">
        <h1>{this.state.teamData.name} | {this.state.teamData.abbrev}</h1>
        <img src={this.state.teamData.logo} alt={this.state.teamData.name} />
        {this.state.teamData? <ArticleContainer data={this.state.teamData} /> : ""}
        {/* {this.state.articles.length > 0 ? 
          <ul id="articlesList">
            <li><a href={this.state.articles[0].url}>{this.state.articles[0].title}</a></li>
            <li><a href={this.state.articles[1].url}>{this.state.articles[1].title}</a></li>
            <li><a href={this.state.articles[2].url}>{this.state.articles[2].title}</a></li>
            <li><a href={this.state.articles[3].url}>{this.state.articles[3].title}</a></li>
            <li><a href={this.state.articles[4].url}>{this.state.articles[4].title}</a></li>
          </ul>
          : "No articles found, please try again."} */}
      </div>
    )
  }
}

export default TeamDetail;