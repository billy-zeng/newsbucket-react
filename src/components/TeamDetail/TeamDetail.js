import React from 'react';
import axios from 'axios';
import TeamDetailHeader from './TeamDetailHeader/TeamDetailHeader';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import './TeamDetail.css';

class TeamDetail extends React.Component {
  state = {
    teamData: ""
  }

  getTeamData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/teams/${this.props.match.params.teamId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          teamData: res.data
        });        
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getTeamData();
  }

  render() {
    console.log(this.props.match.params.teamId)
    console.log(this.state)
    return(
      <div className="d-flex flex-column align-items-center justify-content-center">
        <TeamDetailHeader teamData={this.state.teamData} />
        <div>
          <hr/>
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
        {/* </Container> */}
        </div>
      </div>
    )
  }
}

export default TeamDetail;
