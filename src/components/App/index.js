import React, { Component } from "react";

import './App.scss';

class App extends Component {
  render() {
    console.log('---this.props', this.props);

    return (
      <div styleName="container">
        <h1 styleName="h1">My React App!</h1>
      </div>
    );
  }
}

export default App;
