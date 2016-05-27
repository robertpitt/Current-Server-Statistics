/**
 * @file
 *  - Colum for footer component
 */
import React, { Component, PropTypes } from 'react';

export default class ExampleFooterColumn extends Component {
  render() {

    return (
      <div className="col-md-3">
        <h3>{this.props.title} <i className={this.props.titleIcon}></i> </h3>
      </div>
    )
  }
}

ExampleFooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string.isRequired,
  links: PropTypes.array
}
