/**
 * @file
 *  - Header component example.
 */
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Current Server Stats</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
          </div>
        </div>
      </nav>
    )
  }
}
