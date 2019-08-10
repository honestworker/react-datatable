import React, { Component } from "react";
import Routes from './Routes';

import { connect } from "react-redux";

class App extends Component {
  state = {
    dataSet: []
  };

  componentDidMount = () => {
  };

  render() {
    return (
      <React.Fragment>
        <Routes {...this.props}/>
      </React.Fragment>
    )
  }
}

export default connect()(App);
