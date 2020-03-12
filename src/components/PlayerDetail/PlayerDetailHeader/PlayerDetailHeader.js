import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './PlayerDetailHeader.css';

class PlayerDetailHeader extends React.Component {
  state = {
    userId: localStorage.getItem('uId'),
    liked: false
  }

  addPlayer = () => {
    axios.defaults.withCredentials = true
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/players/${this.props.playerData._id}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          liked: true
        })
      })
      .catch(err => console.log(err.response));
  }

  removePlayer = () => {
    axios.defaults.withCredentials = true
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}/players/${this.props.playerData._id}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          liked: false
        })
      })
      .catch(err => console.log(err.response));
  }

  getUserPlayers = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`, {withCredentials: true})
    .then(res => {
      res.data.players.forEach(player => {
        if(player._id === this.props.playerData._id) {
          this.setState({
            liked: true
          });
        }
      });
    })
    .catch(err => console.log(err.response))
  }

  componentDidMount(){
    this.getUserPlayers();
  }

  render(){
    return (
      <Container id="playerDetailCard" className="d-flex flex-row align-items-start justify-content-center mt-5 mb-3 pb-4">
        <div className="d-flex col-md-4 align-items-center justify-content-center">
          <img className="player-img" src={this.props.playerData.image} alt={this.props.playerData.name} />
        </div>
        <div className="d-flex flex-row col-md-8 align-items-center justify-content-start">
          <div className="col-md-12">
            <h1>{this.props.playerData.name} #{this.props.playerData.jerseyNumber}</h1>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-column col-md-6 align-items-start justify-content-start">
                <p>{this.props.playerData.position}</p>
                <p>Age: {this.props.playerData.age}</p>
                <p>Height: {this.props.playerData.height}  |  Weight: {this.props.playerData.weight}lb</p>
                {
                this.props.playerData && <Link to={`/teams/${this.props.playerData.team._id}`}>{this.props.playerData.team.name}</Link>
                } 
                {
                  this.state.liked
                    ? <button onClick={this.removePlayer} type="button" className="btn btn-lg btn-info like-btn justify-self-center mt-2"><i className="fas fa-heart"></i></button>
                    : <button onClick={this.addPlayer} type="button" className="btn btn-lg btn-info like-btn justify-self-center mt-2"><i className="far fa-heart"></i></button>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default PlayerDetailHeader;
