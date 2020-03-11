import React from 'react';

// Components
import Container from 'react-bootstrap/Container';

// Styles
import './ProfileHeader.css';

const ProfileHeader = props => {
  return(
    <Container id="profile-header" className="d-flex flex-row align-items-start justify-content-center mt-5">
      <div id="profile-img-wrapper" className="d-flex col-sm-3 align-items-center justify-content-center">
        <img id="profile-picture" src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="profile-pic"/>
      </div>
      <div id="profile-overview" className="col-sm-9 d-flex flex-column align-items-start justify-content-center text-light bg-dark pl-5">
        <h1>{props.profile.username}</h1>
        <small>Joined {props.profile.joinDate}</small>
      </div>
    </Container>
  );
};

export default ProfileHeader;
