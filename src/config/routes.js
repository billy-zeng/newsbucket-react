import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PlayerDetail from '../components/PlayerDetail/PlayerDetail';
import TeamsContainer from '../containers/TeamsContainer/TeamsContainer';
import TeamDetail from '../components/TeamDetail/TeamDetail';
import UserFeed from '../components/UserFeed/UserFeed';

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/userfeed' component={UserFeed} />
      <Route
        path='/profile'
        render={() => (
          <ProfileContainer logout={props.logout} />
        )}
      />
      <Route path='/players/:playerId' component={PlayerDetail} />
      <Route path='/teams/:teamId' component={TeamDetail} />
      <Route path='/teams' component={TeamsContainer} />
    </Switch>
  )
}

export default Routes;
