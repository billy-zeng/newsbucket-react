import React from 'react';
import Container from 'react-bootstrap/Container';

import './Footer.css'
;
const Footer = props => {
  return(
    <footer className="d-flex flex-column align-items-center justify-content-center">
      <Container className="d-flex flex-column align-items-center justify-content-center p-1">
        <div className="d-flex flex-row align-items-center justify-content-center p-1">
          <a className="mr-1 ml-1" href="/"><i className="text-dark fab fa-facebook-square"></i></a>
          <a className="mr-1 ml-1" href="/"><i className="text-dark fab fa-instagram-square"></i></a>
          <a className="mr-1 ml-1" href="/"><i className="text-dark fab fa-github-square"></i></a>
          <a className="mr-1 ml-1" href="/"><i className="text-dark fab fa-linkedin"></i></a>
        </div>
      </Container>
      <p className="copyright">&copy; Billy Zeng 2020</p>
    </footer>
  );
};

export default Footer;
