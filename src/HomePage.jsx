import React, { Component } from 'react';
import ListData from './List';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <ListData data={this.state.posts} />
      </div>
    );
  }
}

export default Homepage;
