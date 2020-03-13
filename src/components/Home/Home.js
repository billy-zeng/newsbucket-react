import React from 'react';
import './Home.css';

const Home = props => {
  return (
    <div className="landing text-light pt-5">
      <h1>Welcome to NewsBucket</h1>
      <p>NewsBucket gathers the lastest news articles about your favorite NBA teams and players for you all in one place. 
      <br/>
      Get started by creating an account and start adding to your bucket today !</p>
    </div>
  );
}

export default Home;
