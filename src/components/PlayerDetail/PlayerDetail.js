import React from 'react';
import axios from 'axios';
import PlayerDetailHeader from './PlayerDetailHeader/PlayerDetailHeader';
import ArticleContainer from '../../containers/ArticleContainer/ArticleContainer';

class PlayerDetail extends React.Component {
  state = {
    playerData: null
  }

  getPlayerData() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/players/${this.props.match.params.playerId}`)
      .then(res => {
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
    return(
      <div className="d-flex flex-column align-items-center justify-content-center">
        {this.state.playerData && <PlayerDetailHeader playerData={this.state.playerData} />}
        {this.state.playerData && <ArticleContainer data={this.state.playerData} />}
      </div>
    )
  }
}

export default PlayerDetail;
