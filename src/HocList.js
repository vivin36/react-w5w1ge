import React from 'react';

let HocList = Component => {
  class HOC extends React.Component {
    render() {
      return (
        <div>
          <h1>Modified HOC</h1>
          <Component />
        </div>
      );
    }
  }
  return HOC;
};

export default HocList;
