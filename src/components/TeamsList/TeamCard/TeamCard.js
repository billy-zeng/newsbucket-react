import React from 'react';
// import Routes from '../../config/routes';
import { Link } from 'react-router-dom';
// import TeamDetail from '../../TeamDetail/TeamDetail';

const TeamCard = props => {
  return(
    <ul>
      {/* <h4>{props.teamData.name}</h4> */}
      <Link to={`/teams/${props.teamData._id}`}><h4>{props.teamData.name}</h4></Link>
      <li>{props.teamData.players[0].name}</li>
      <li>{props.teamData.players[1].name}</li>
      <li>{props.teamData.players[2].name}</li>
      <li>{props.teamData.players[3].name}</li>
      <li>{props.teamData.players[4].name}</li>
    </ul>
  )
}

export default TeamCard;
