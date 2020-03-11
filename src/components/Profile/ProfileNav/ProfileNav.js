import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileNav.css';

const ProfileNav = props => {
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
      <Link to='/profile' className="profile-nav-btn btn btn-dark text-light d-flex flex-row justify-content-start align-items-center">
        <i className="fas fa-user-slash"></i>Delete Account
      </Link>
    </div>
  )
}

export default ProfileNav;
