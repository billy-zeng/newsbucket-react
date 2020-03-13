import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './TeamDetailHeader.css';

class TeamDetailHeader extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    liked: false
  }

  addTeam = () =>{
    axios.defaults.withCredentials = true
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/teams/${this.props.teamData._id}`)
      .then(res => {
        this.setState({
          liked: true
        })
      })
      .catch(err => console.log(err.response));
  }

  removeTeam = () =>{
    axios.defaults.withCredentials = true
    axios    
      .delete(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/teams/${this.props.teamData._id}`)
      .then(res => {
        this.setState({
          liked: false
        })
      })
      .catch(err => console.log(err.response));
  }

  getUserTeams = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
      .then(res => {
        res.data.teams.forEach(team => {
          if(team._id === this.props.teamData._id) {
            this.setState({
              liked: true
            });
          }
        });
      })
      .catch(err => console.log(err.response))
  }
  
  componentDidMount(){
    this.getUserTeams();
  }

  render(){
    return (
      <Container id="teamDetailCard" className="d-flex flex-row align-items-start justify-content-center mt-5 mb-3 pb-4">
        <div className="d-flex col-md-4 align-items-center justify-content-center">
          <img className="team-logo" src={this.props.teamData.logo} alt={this.props.teamData.name} />
        </div>
        <div className="d-flex flex-row col-md-8 align-items-center justify-content-start">
          <div className="col-md-12">
            <h1>{this.props.teamData.name}</h1>
            <h3>{this.props.teamData.abbrev}</h3>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-column col-md-6 align-items-start justify-content-start">
                <p>Year Founded: {this.props.teamData.yearFounded}</p>
                <p>{this.props.teamData.conference} Conference</p>
                {
                  this.state.liked
                    ? <button onClick={this.removeTeam} type="button" className="btn btn-lg btn-info like-btn justify-self-center mt-2"><i className="fas fa-heart"></i></button>
                    : <button onClick={this.addTeam} type="button" className="btn btn-lg btn-info like-btn justify-self-center mt-2"><i className="far fa-heart"></i></button>
                }
              </div>
              {this.props.teamData.players ?
              <div className="d-flex flex-column col-md-6 align-items-start justify-content-start">
                <p className="mb-0">Players</p>
                <li><Link to={`/players/${this.props.teamData.players[0]._id}`}>{this.props.teamData.players[0].name}</Link></li>
                <li><Link to={`/players/${this.props.teamData.players[1]._id}`}>{this.props.teamData.players[1].name}</Link></li>
                <li><Link to={`/players/${this.props.teamData.players[2]._id}`}>{this.props.teamData.players[2].name}</Link></li>
                <li><Link to={`/players/${this.props.teamData.players[3]._id}`}>{this.props.teamData.players[3].name}</Link></li>
                <li><Link to={`/players/${this.props.teamData.players[4]._id}`}>{this.props.teamData.players[4].name}</Link></li>
              </div>
              : ""}
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default TeamDetailHeader;
