/**
 * @file
 *  - Footer component example.
 */
import React, { Component } from 'react';

import ExampleFooterColumn from './column/ExampleFooterColumn.jsx';

export default class ExampleFooter extends Component {
  render() {

    return (
      <div id="footer">
        <div className="container">
          <div className="row">

            <ExampleFooterColumn
              key={Date.now()}
              title="This is prop"
              titleIcon="fa fa-child"
            />

            <ExampleFooterColumn
              key={Date.now() + 1}
              title="This is prop"
              titleIcon="fa fa-child"
            />

            <ExampleFooterColumn
              key={Date.now() + 2}
              title="This is prop"
              titleIcon="fa fa-child"
            />

            <ExampleFooterColumn
              key={Date.now() + 3}
              title="This is prop"
              titleIcon="fa fa-child"
            />

          </div>
        </div>
      </div>
    )
  }
}
