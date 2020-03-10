import React from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';

// Components
import Routes from './config/routes';
// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  // state = {
  //   currentUser: localStorage.getItem('uId')
  // };

  render(){
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
