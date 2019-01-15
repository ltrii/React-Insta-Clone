import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      filterPosts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  searchAllPosts = ev => {
    const posts = this.state.posts.filter(po => {
      if (po.username.includes(ev.target.value)) {
        return po;
      }
    });
    this.setState({filterPosts: posts});
  }



  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchAllPosts} searchTerm={this.state.searchTerm} />
        <PostsContainer posts={this.state.filterPosts.length > 0 ? this.state.filterPosts : this.state.posts} />
      </div>
    );
  }
}

export default App;
