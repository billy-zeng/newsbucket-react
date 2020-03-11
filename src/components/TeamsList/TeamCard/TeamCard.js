import React from 'react';
import { Link } from 'react-router-dom';
import './TeamCard.css';

const TeamCard = props => {
  return(
    <div className="col-md-4 mb-2">
      <div className="card p-3 m-2 flex align-items-center">
        <img className="card-img-top" src={props.teamData.logo} alt={props.teamData.name} />
        <div className="card-body">
          <h5 className="card-title"><Link to={`/teams/${props.teamData._id}`}>{props.teamData.name}</Link></h5>
          <h6 className="card-subtitle">{props.teamData.abbrev}</h6>
          {/* <ul> */}
            {/* <p>Players</p> */}
            <li><Link to={`/players/${props.teamData.players[0]._id}`}>{props.teamData.players[0].name}</Link></li>
            <li><Link to={`/players/${props.teamData.players[1]._id}`}>{props.teamData.players[1].name}</Link></li>
            <li><Link to={`/players/${props.teamData.players[2]._id}`}>{props.teamData.players[2].name}</Link></li>
            <li><Link to={`/players/${props.teamData.players[3]._id}`}>{props.teamData.players[3].name}</Link></li>
            <li><Link to={`/players/${props.teamData.players[4]._id}`}>{props.teamData.players[4].name}</Link></li>
          {/* </ul> */}
        </div>
      </div>
    </div>
  )
}

export default TeamCard;
