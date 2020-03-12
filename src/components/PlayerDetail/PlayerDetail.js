import React from 'react';
import axios from 'axios';
import PlayerDetailHeader from './PlayerDetailHeader/PlayerDetailHeader';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';
import './PlayerDetail.css';

class PlayerDetail extends React.Component {
  state = {
    playerData: "",
  }

  getPlayerData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/players/${this.props.match.params.playerId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          playerData: res.data
        });       
      })
      .catch(err => console.log(err.response))
  }

  componentDidMount() {
    this.getPlayerData();
  }

  render() {
    console.log(this.props.match.params.playerId)
    console.log(this.state)
    return(
      <div className="d-flex flex-column align-items-center justify-content-center">
        {this.state.playerData && <PlayerDetailHeader playerData={this.state.playerData} />}
        <div>
          {this.state.playerData ? <ArticleContainer data={this.state.playerData} /> : ""}
        </div>
      </div>
    )
  }
}

export default PlayerDetail;
