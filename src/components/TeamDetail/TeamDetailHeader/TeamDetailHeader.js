import React from 'react';
// import axios from 'axios';
// import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './TeamDetailHeader.css';

const TeamDetailHeader = props => {
  return (
    <Container id="teamDetailCard" className="d-flex flex-row align-items-start justify-content-center mt-5 mb-3 pb-4">
      <div className="d-flex col-md-4 align-items-center justify-content-center">
        <img class="team-logo" src={props.teamData.logo} alt={props.teamData.name} />
      </div>
      <div className="d-flex flex-row col-md-8 align-items-center justify-content-start">
        <div>
          <h1>{props.teamData.name}</h1>
          <h3>{props.teamData.abbrev}</h3>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-column col-md-6 align-items-center justify-content-start">
              <p>Year Founded: {props.teamData.yearFounded}</p>
              <p>{props.teamData.conference} Conference</p>
            </div>
            {props.teamData.players ?
            <div className="d-flex flex-column col-md-6 align-items-start justify-content-start">
              <p className="mb-0">Players</p>
              <li><Link to={`/players/${props.teamData.players[0]._id}`}>{props.teamData.players[0].name}</Link></li>
              <li><Link to={`/players/${props.teamData.players[1]._id}`}>{props.teamData.players[1].name}</Link></li>
              <li><Link to={`/players/${props.teamData.players[2]._id}`}>{props.teamData.players[2].name}</Link></li>
              <li><Link to={`/players/${props.teamData.players[3]._id}`}>{props.teamData.players[3].name}</Link></li>
              <li><Link to={`/players/${props.teamData.players[4]._id}`}>{props.teamData.players[4].name}</Link></li>
            </div>
            : ""}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TeamDetailHeader;
