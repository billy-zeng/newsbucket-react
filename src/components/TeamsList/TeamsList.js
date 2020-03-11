import React from 'react';
import TeamCard from './TeamCard/TeamCard.js';
import './TeamsList.css';

class TeamsList extends React.Component {

  displayTeams = teams => {
    console.log("[TeamList] display teams")
    
    return teams.map(team => {
      return <TeamCard key={team._id} teamData={team} />
    });
  };

  render(){
    console.log(this.props)
    return(
      <div className="row">
        {this.displayTeams(this.props.teams)}
      </div>
    )
  }
}

export default TeamsList;
