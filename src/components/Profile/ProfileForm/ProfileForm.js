import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {
  state = {
    username: this.props.profile.username,
    email: this.props.profile.email,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${this.props.profile._id}`, this.state, {withCredentials: true})
      .then(res => {
        console.log(res)
        this.props.updateUser(res.data);
        this.props.history.push('/profile');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className='container mt-4 mb-3'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <h4 className='mb-3'>Update Account Info</h4>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.username}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='email'
                  id='email'
                  name='email'
                  value={this.state.email}
                />
              </div>
              <div className='button-wrapper'>
                <button className='btn btn-primary' type='submit'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileForm);
