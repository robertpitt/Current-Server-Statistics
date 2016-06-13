/**
 * @file
 *  - THis file contains the component that will wrap the whole
 *  application
 */
import React, { Component, PropTypes } from 'react';

// theses are the subcompoenents we are pulling in.
import Header from './components/header/Header.jsx';

//App component - reporesents the entire application from the top level
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <div className="container">
          this is the whole application.
        </div>
      </div>
    )
  }
}
