/**
 * @File
 * Routing users
 */
import React from 'react';
import { mount } from 'react-mounter';

// this will import the main application wrapper component
import App from '../imports/stats/ui/App.jsx';

FlowRouter.route('/', {
  action() {
    mount(App);
  }
});
