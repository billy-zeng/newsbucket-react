import React from 'react';
import { Link } from 'react-router-dom';

class ProfileMain extends React.Component {
  
  displayTeams = teams => {
    console.log(teams)
    return teams.map((team, i) => {
      return (
        <li key={i}><Link to={`/teams/${team._id}`}>{team.name}</Link></li>
      )
    })
  }

  displayPlayers = players => {
    console.log(players)
    return players.map((player, i) => {
      return (
        <li key={i}><Link to={`/players/${player._id}`}>{player.name}</Link></li>
      )
    })
  }

  render(){
    // console.log(this.state.profile.teams)
    // console.log(this.state.profile.players)
    return (
      <div className="col-sm-9 d-flex flex-column align-items-center justify-content-start mt-5">
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <ul>
              <h3>My Teams</h3>  
              {this.props.profile && this.displayTeams(this.props.teams)}   
            </ul>
          </div>
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <ul>
              <h3>My Players</h3>
              {this.props.profile && this.displayPlayers(this.props.players)}  
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMain;
