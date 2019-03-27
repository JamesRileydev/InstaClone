import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
          <SearchBar />
          <PostList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
