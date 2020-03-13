import React from 'react';
import TeamsList from '../../components/TeamsList/TeamsList'
import axios from 'axios';

class TeamsContainer extends React.Component {
  state = {
    teams: []
  };

  getTeams = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/teams/`)
    .then(res => {
      this.setState({
        teams: res.data
      });
    })
    .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getTeams();
  };

  render() {
    return (
      <TeamsList teams={this.state.teams} />
    )
  }
}

export default TeamsContainer;
