import React, { Component } from 'react';
import ListData from './List';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  ParentFun = (e, title) => console.log('From parent e', e, title);

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <ListData data={this.state.posts} clickedInChild={this.ParentFun}>
          ListData children value
        </ListData>
      </div>
    );
  }
}

export default Homepage;
