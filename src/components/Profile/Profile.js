import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileNav from './ProfileNav/ProfileNav';
import Routes from './routes';
import Container from 'react-bootstrap/Container';

const Profile = props => {
  return (
    <div id="profile-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <ProfileHeader profile={props.profile} />
        <Container id="profile-main" className="d-flex flex-row align-items-start justify-content-center">
          <ProfileNav logout={props.logout} />
          {props.profile && <Routes profile={props.profile} teams={props.teams} players={props.players} updateUser={props.updateUser} />}
        </Container>
    </div>
  );
};

export default Profile;
