import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      instaPosts: []
    };
  }

  componentDidMount() {
    this.getPosts(dummyData);
  }

  getPosts = data =>{
    fetch(data)
      .then(res=> {
        return res.json();
      })
      .then(data => {
        this.setState({ instaPosts: data.dummyData})
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">Insta-Clone</header>
          <PostList list={this.state.instaPosts}/>
      </div>
    );
  }
}

export default App;
