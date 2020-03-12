import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileNav from './ProfileNav/ProfileNav';
import ProfileMain from './ProfileMain/ProfileMain';
// import Routes from './routes';
import Container from 'react-bootstrap/Container';

// import './Profile.css'

const Profile = props => {
  console.log("[Profile Render]")
  console.log(props.profile)
  return (
    <div id="profile-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <ProfileHeader profile={props.profile} />
        <Container id="profile-main" className="d-flex flex-row align-items-start justify-content-center">
          <ProfileNav logout={props.logout} />
          {props.profile ? <ProfileMain profile={props.profile} /> : ""}
          {/* <Routes profile={props.profile} updateUser={props.updateUser} posts={props.posts} updateUserPosts={props.updateUserPosts} /> */}
        </Container>
    </div>
  );
};

export default Profile;
