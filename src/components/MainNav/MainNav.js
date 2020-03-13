import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';

// Styles
import './MainNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainNav extends React.Component {
  state = {
    show: false,
    showSignup: false,
  };

  handleOpenSignup = () => {
    this.setState({
      show: true,
      showSignup: true,
    })
  };

  handleOpenLogin = () => {
    this.setState({
      show: true,
      showSignup: false
    })
  };

  handleClose = () => {
    this.setState({
      show: false,
    })
  };

  render(){
    return (
      <Navbar className="navbar-expand-lg navbar-light bg-light ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/"><h2 id="page-title" className="nav-logo">NewsBucket <i className="fas fa-basketball-ball"></i></h2></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mt-2 mt-lg-0">
            {!this.props.currentUser ? (
              <>
                <NavItem>
                  <Link className="nav-link" href="#" to="/teams">Teams</Link>
                </NavItem>
                <NavItem className="nav-link" onClick={this.handleOpenSignup}>Sign Up</NavItem>
                <NavItem className="nav-link" onClick={this.handleOpenLogin}>Log In</NavItem>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Body>
                    {this.state.showSignup
                      ? <Signup handleOpenLogin={this.handleOpenLogin} />
                      : <Login handleOpenSignup={this.handleOpenSignup} setCurrentUser={this.props.setCurrentUser} handleClose={this.handleClose} />
                    }
                  </Modal.Body>
                </Modal>
              </>
              ) : (
              <>
                <NavItem>
                  <Link className="nav-link" to="/teams">Teams</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/userfeed">My Feed</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/profile">Profile</Link>
                </NavItem>
                <NavItem className="nav-link" onClick={this.props.logout}>Logout</NavItem>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default MainNav;
