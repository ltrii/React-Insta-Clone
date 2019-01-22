import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authenication/Authenticate'
import PostsPage from "./components/PostContainer/PostsPage"

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);


//Refractor code for 