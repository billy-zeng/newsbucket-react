import React from 'react';
// import Routes from '../../config/routes';
import { Link } from 'react-router-dom';
// import TeamDetail from '../../TeamDetail/TeamDetail';

const TeamCard = props => {
  return(
    <ul>
      {/* <h4>{props.teamData.name}</h4> */}
      <Link to={`/teams/${props.teamData._id}`}><h4>{props.teamData.name}</h4></Link>
      <li><Link to={`/players/${props.teamData.players[0]._id}`}>{props.teamData.players[0].name}</Link></li>
      <li><Link to={`/players/${props.teamData.players[1]._id}`}>{props.teamData.players[1].name}</Link></li>
      <li><Link to={`/players/${props.teamData.players[2]._id}`}>{props.teamData.players[2].name}</Link></li>
      <li><Link to={`/players/${props.teamData.players[3]._id}`}>{props.teamData.players[3].name}</Link></li>
      <li><Link to={`/players/${props.teamData.players[4]._id}`}>{props.teamData.players[4].name}</Link></li>
    </ul>
  )
}

export default TeamCard;
