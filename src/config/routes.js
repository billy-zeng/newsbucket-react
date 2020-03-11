import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import TeamsContainer from '../containers/TeamsContainer/TeamsContainer';
import PlayerDetail from '../components/PlayerDetail/PlayerDetail';
import TeamDetail from '../components/TeamDetail/TeamDetail';

const Routes = props => {
  // console.log(props)
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route path='/profile' component={ProfileContainer} /> */}
      <Route path='/players/:playerId' component={PlayerDetail} />
      <Route path='/teams/:teamId' component={TeamDetail} />
      <Route path='/teams' component={TeamsContainer} />
    </Switch>
  )
}

export default Routes;
