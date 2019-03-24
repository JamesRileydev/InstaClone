import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  // componentDidMount() {
  //   this.getPosts(dummyData);
  // }

  // getPosts = dummyData =>{
  //   fetch(dummyData)
  //     .then(res=> {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ instaPosts: data.dummyData})
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     })
  // }

  render() {
    return (
      <div className="App">
        <header className="Header">Insta-Clone</header>
          <PostList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
