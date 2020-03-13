import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './ProfileNav.css';

class ProfileNav extends React.Component {
  state = {
    show: false,
    userId: localStorage.getItem('uId')
  };

  // open modal
  handleOpen = () => {
    this.setState({
      show: true,
    });
  };

  // close modal
  handleClose = () => {
    this.setState({
      show: false,
    })
  };

  // delete account
  handleDelete = event => {
    event.preventDefault();
    this.props.logout();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/users/${this.state.userId}`)
      .then(res => {
        this.handleClose();
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div id="profile-nav" className="col-sm-3 d-flex flex-column align-items-center justify-content-star mr-3">
        <Link to='/profile' className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">
          <i className="fas fa-user"></i>Overview
        </Link>
        <Link to="/userfeed" className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">
          <i className="fas fa-comment-alt"></i>My Feed
        </Link>
        <Link to='/profile/edit' className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">  
          <i className="far fa-edit"></i>Update Info
        </Link>
        <Link to='/profile' className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">
          <i className="fas fa-camera"></i>Update Picture
        </Link>
        <Link to='/profile' className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">
          <i className="fas fa-key"></i>Change Password
        </Link>
        <div onClick={this.handleOpen} className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">
          <i className="fas fa-user-slash"></i>Delete Account
        </div>

        <Modal className="account-modal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body><p>Are you sure you want to delete your account?</p></Modal.Body>
          <Modal.Footer>
            <div className="btn btn-secondary text-light" onClick={this.handleClose}>Cancel</div>
            <div className="btn btn-danger text-light" onClick={this.handleDelete}>Delete Account</div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default withRouter(ProfileNav);
