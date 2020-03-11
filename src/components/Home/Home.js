import React from 'react';
// Components
import Jumbotron from 'react-bootstrap/Jumbotron';
// import HomeMain from './HomeMain/HomeMain';
// CSS
import './Home.css';

const Home = props => {
  return (
    <Jumbotron className="text-light">
      <h1>Welcome to NewsBucket</h1>
      <p>NewsBucket gathers the lastest news articles about your favorite NBA teams and players for you all in one place. 
      <br/>
      Get started by creating an account today and start adding to your bucket!</p>
    </Jumbotron>
    // <main role="main" class="inner cover text-center">
    //   <h1 class="cover-heading">Welcome to NewsBucket!</h1>
    //   <p class="lead">NewsBucket gathers the lastest news articles about your favorite NBA teams and players for you all in one place. 
    //   <br/>
    //   Get started by creating an account today and start adding to your bucket!</p>
    //   {/* <p class="lead">
    //     <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
    //   </p> */}
    // </main>
  );
}

export default Home;
