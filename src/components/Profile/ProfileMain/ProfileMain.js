import React from 'react';
import { Link } from 'react-router-dom';

// Style
// import './ProfileMain.css';

class ProfileMain extends React.Component {

  displayTeams = teams => {
    console.log('display teams')
    console.log(teams)
    return teams.map((team, i) => {
      return (
        <li key={i}><Link to={`/teams/${team._id}`}>{team.name}</Link></li>
      )
    })
  }

  displayPlayers = players => {
    return players.map((player, i) => {
      return (
        <li key={i}><Link to={`/players/${player._id}`}>{player.name}</Link></li>
      )
    })
  }

  render(){
    console.log('[ProfileMain render]')
    console.log(this.props.profile.teams)
    console.log(this.props.profile.players)

    return (
      <div className="col-sm-9 d-flex flex-column align-items-center justify-content-start mt-5">
        {/* <div className="container d-flex flex-row align-items-center justify-content-center mt-1 mb-5">
          <div id="username-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
            <h4>{props.profile.username}</h4>
            <small>Username</small>
          </div>
          <div id="email-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
            <h4>{props.profile.email}</h4>
            <small>Email</small>
          </div>
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <div id="member-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
            <h4>{props.profile.joinDate}</h4>
            <small>Member Since</small>
          </div>
        </div> */}
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <ul>
              <h3>My Teams</h3>  
              {this.displayTeams(this.props.profile.teams)}   
            </ul>
          </div>
          <div className="container d-flex flex-row align-items-center justify-content-center">
            <ul>
              <h3>My Players</h3>
              {this.displayPlayers(this.props.profile.players)}  
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMain;
