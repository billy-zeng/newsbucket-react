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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse id="navbarTogglerDemo01">
          <h1 className="mr-1 ml-1 mt-1"><i className="fas fa-map-signs text-dark"></i></h1>
          <Navbar.Brand href="/"><h2 id="page-title">NewsBucket</h2></Navbar.Brand>
          <Nav className="ml-auto mt-2 mt-lg-0">
            {!this.props.currentUser ? (
              <>
                {/* <li className="nav-item nav-link" onClick={this.handleOpenSignup}>Sign Up</li>
                <li className="nav-item nav-link" onClick={this.handleOpenLogin}>Log In</li> */}
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
                  <Link className="nav-link" href="#" to="/">My Feed</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" href="#" to="/profile">Profile</Link>
                </NavItem>
                <NavItem className="nav-link" onClick={this.props.logout}>Logout</NavItem>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  // render(){
  //   return (
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  //         <h1 className="mr-1 ml-1 mt-1"><i className="fas fa-map-signs text-dark"></i></h1>
  //         <Link className="navbar-brand" href="#" to="/"><h1 id="page-title">Wayfarer</h1></Link>
  //         <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
  //           {!this.props.currentUser ? (
  //             <>
  //               <li className="nav-item nav-link" onClick={this.handleOpenSignup}>Sign Up</li>
  //               <li className="nav-item nav-link" onClick={this.handleOpenLogin}>Log In</li>
  //               <Modal show={this.state.show} onHide={this.handleClose}>
  //                 <Modal.Body>
  //                   {this.state.showSignup
  //                     ? <Signup handleOpenLogin={this.handleOpenLogin} />
  //                     : <Login handleOpenSignup={this.handleOpenSignup} setCurrentUser={this.props.setCurrentUser} handleClose={this.handleClose} />
  //                   }
  //                 </Modal.Body>
  //               </Modal>
  //             </>
  //             ) : (
  //             <>
  //               <li className="nav-item">
  //                 <Link className="nav-link" href="#" to="/profile">Profile</Link>
  //               </li>
  //               <li className="nav-item nav-link" onClick={this.props.logout}>Logout</li>
  //             </>
  //           )}
  //         </ul>
  //       </div>
  //     </nav>
  //   );
  // };
};

export default MainNav;
