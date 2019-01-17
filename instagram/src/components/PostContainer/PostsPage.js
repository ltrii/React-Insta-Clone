import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBarContainer'
import Header from '../Header/Header';

class PostsPage extends Component {
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
        <Header searchPosts={this.searchAllPosts} searchTerm={this.state.searchTerm} />
        <PostContainer posts={this.state.filterPosts.length > 0 ? this.state.filterPosts : this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
