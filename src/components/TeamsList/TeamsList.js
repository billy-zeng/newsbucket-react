import React from 'react';
import Team from './Team/Team.js';
import './TeamsList.css';

class TeamsList extends React.Component {

  displayTeams = teams => {
    console.log("[TeamList] display teams")
    
    return teams.map(team => {
      return <Team key={team._id} teamData={team} />
    });
  };

  render(){
    console.log(this.props)
    return(
      this.displayTeams(this.props.teams)
    )
  }
}

export default TeamsList;
