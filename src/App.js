import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import CommentSection from './components/CommentSection/CommentSection';

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
        <header className="Header">Insta-Clone</header>
          <PostList posts={this.state.posts}/>
          <CommentSection posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
