import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './PlayerDetailHeader.css';

const PlayerDetailHeader = props => {
  console.log(props.playerData.team)
  return (
    <Container id="playerDetailCard" className="d-flex flex-row align-items-start justify-content-center mt-5 mb-3 pb-4">
      <div className="d-flex col-md-4 align-items-center justify-content-center">
        <img class="player-img" src={props.playerData.image} alt={props.playerData.name} />
      </div>
      <div className="d-flex flex-row col-md-8 align-items-center justify-content-start">
        <div className="col-md-12">
          <h1>{props.playerData.name} #{props.playerData.jerseyNumber}</h1>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-column col-md-6 align-items-start justify-content-start">
              <p>{props.playerData.position}</p>
              <p>Age: {props.playerData.age}</p>
              <p>Height: {props.playerData.height}  |  Weight: {props.playerData.weight}lb</p>
              {props.playerData ? <Link to={`/teams/${props.playerData.team._id}`}>{props.playerData.team.name}</Link> : ""}
              <button type="button" className="btn btn-lg btn-info like-btn justify-self-center mt-2"><i className="far fa-heart"></i></button> 
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PlayerDetailHeader;
