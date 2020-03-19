import React from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
  state = {
    profile: null,
    teams: null,
    players: null
  };

  updateUser = user => {
    this.setState({ profile: user });
  }

  componentDidMount() {
    const userId = localStorage.getItem('uId');
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {withCredentials: true})
      .then(res => {
        this.setState({
          profile: res.data,
          teams: res.data.teams,
          players: res.data.players
        });
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      this.state.profile && <Profile profile={this.state.profile} teams={this.state.teams} players={this.state.players} updateUser={this.updateUser} logout={this.props.logout} />
    )
  }
}

export default ProfileContainer;
