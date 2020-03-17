import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileMain from './ProfileMain/ProfileMain';
import ProfileForm from './ProfileForm/ProfileForm';

const Routes = props => {
  return (
    <Switch>
      <Route
        path='/profile/edit'
        render={() => (
          <ProfileForm profile={props.profile} updateUser={props.updateUser} />
        )}
      />
      <Route
        path='/profile'
        render={() => (
          <ProfileMain profile={props.profile} teams={props.teams} players={props.players} />
        )}
      />
    </Switch>
  )
}

export default Routes;
