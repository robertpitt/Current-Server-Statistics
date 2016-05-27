/**
 * @file
 * Thie file contains the component for the whole application.
 */
import React,  { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// App component - represents the entire application from the top level
export default class MainApp extends Component {
  render() {
    return (
      <div className="container">
      This should have content, dont you think.
      {this.props.content}
      </div>
    )
  }
}

// props
MainApp.propTypes = {
  content: PropTypes.object
}
