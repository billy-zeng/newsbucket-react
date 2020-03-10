import React from 'react';

const Team = props => {
  return(
    <ul>
      <h4>{props.teamData.name}</h4>
      <li>{props.teamData.players[0].name}</li>
      <li>{props.teamData.players[1].name}</li>
      <li>{props.teamData.players[2].name}</li>
      <li>{props.teamData.players[3].name}</li>
      <li>{props.teamData.players[4].name}</li>
    </ul>
  )
}

export default Team;
