import React from 'react';
import axios from 'axios';
import './Auth.css';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, this.state)
      .then(res => {
        this.props.handleOpenLogin();
      })
      .catch(err => console.log(err.response))
  };

  render(){
    return(
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <h4 className='mb-3'>Signup</h4>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Username</label>
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
                <label htmlFor='name'>Email</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='email'
                  id='email'
                  name='email'
                  value={this.state.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Password</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='password'
                  id='password'
                  name='password'
                  value={this.state.password}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>
                <input
                  onChange={this.handleChange}
                  className='form-control form-control-lg'
                  type='password'
                  id='password2'
                  name='password2'
                  value={this.state.password2}
                />
              </div>
              <div className='button-wrapper'>
                <button className='btn btn-primary' type='submit'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
          <div>
            <p class='auth-link' onClick={this.props.handleOpenLogin}>Already have an account? Login here!</p>
          </div>
      </div>
    )
  }
}

export default Signup;
