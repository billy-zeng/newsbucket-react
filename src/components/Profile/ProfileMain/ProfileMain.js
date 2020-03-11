import React from 'react';

// Style
// import './ProfileMain.css';

const ProfileMain = props => {
  return (
    <div className="col-sm-9 d-flex flex-column align-items-center justify-content-start mt-5">
      {/* <div className="container d-flex flex-row align-items-center justify-content-center mt-1 mb-5">
        <div id="username-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.username}</h4>
          <small>Username</small>
        </div>
        <div id="email-wrapper" className="container col-sm-6 d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.email}</h4>
          <small>Email</small>
        </div>
      </div>
      <div className="container d-flex flex-row align-items-center justify-content-center">
        <div id="member-wrapper" className="container d-flex flex-column align-items-start justify-content-center">
          <h4>{props.profile.joinDate}</h4>
          <small>Member Since</small>
        </div>
      </div> */}

      <div className="container d-flex flex-row align-items-center justify-content-center">
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <ul>
            <h3>My Teams</h3>
          </ul>
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center">
          <ul>
            <h3>My Players</h3>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain;
