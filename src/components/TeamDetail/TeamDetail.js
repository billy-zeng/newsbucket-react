import React from 'react';
import axios from 'axios';
import TeamDetailHeader from './TeamDetailHeader/TeamDetailHeader';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import './TeamDetail.css';

class TeamDetail extends React.Component {
  state = {
    teamData: null
  }

  getTeamData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/teams/${this.props.match.params.teamId}`)
      .then(res => {
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
    return(
      <div className="d-flex flex-column align-items-center justify-content-center">
        {this.state.teamData && <TeamDetailHeader teamData={this.state.teamData} />}
        {this.state.teamData && <ArticleContainer data={this.state.teamData} />}
      </div>
    )
  }
}

export default TeamDetail;
