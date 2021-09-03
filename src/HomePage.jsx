import React, { Component } from 'react';
import listData from './list';
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
        <h1 className="bold-green">HomePage</h1>
        {JSON.stringify(this.state.posts)}
        <listData data={this.state.posts} />
      </div>
    );
  }
}

export default Homepage;
