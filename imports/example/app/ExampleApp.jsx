import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

// theses are the subcompoenents we are pulling in.
import ExampleHeader from '../components/header/ExampleHeader.jsx';
import ExampleFooter from '../components/footer/ExampleFooter.jsx';

import { Posts } from './api/posts.js';

// examplle app component
export default class ExampleApp extends Component {
  renderPosts() {
    return this.props.posts.map((post) => {
      console.log(post);
    });
  }

  render() {
    return (
      <div className="container">
        <ExampleHeader />

          <div ClassName="container">
            {this.renderPosts()}
          </div>

          {this.props.content}
        <ExampleFooter />
      </div>
    )
  }
}

// properties.
ExampleApp.propTypes = {
  content: PropTypes.object,
  posts: PropTypes.array.isRequired
}

// lets query the information.
export default createContainer(() => {

  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}).fetch(),
  };
}, ExampleApp);
