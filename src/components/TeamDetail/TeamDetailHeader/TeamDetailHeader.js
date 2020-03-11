import React from 'react';
// import axios from 'axios';
// import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import Container from 'react-bootstrap/Container';
import './TeamDetailHeader.css';

const TeamDetailHeader = props => {
  return (
    <Container id="teamCard" className="d-flex flex-row align-items-start justify-content-center mt-5 mb-3">
      <div className="d-flex col-md-4 align-items-center justify-content-center">
        <img class="team-logo" src={props.teamData.logo} alt={props.teamData.name} />
      </div>
      <div className="d-flex col-md-8 align-items-center justify-content-start">
        <div>
        <h1>{props.teamData.name}</h1>
        <h3>{props.teamData.abbrev}</h3>
        <p>Year Founded: {props.teamData.yearFounded}</p>
        <p>{props.teamData.conference} Conference</p>
        </div>
      </div>
    </Container>
  )
}

export default TeamDetailHeader;
