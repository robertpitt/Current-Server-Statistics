/**
 * @File
 * Routing users
 */
import React from 'react';
import { mount } from 'react-mounter';

import MainApp from '../imports/boilerplate/ui/MainApp.jsx';

/**
 * EXAMPLE APP. delete block
 */
import ExampleApp from '../imports/example/app/ExampleApp.jsx';  // delete
import ExampleComponent from '../imports/example/components/ExampleComponent.jsx'; // delete
import AnonExampleComponent from '../imports/example/components/AnonExampleComponent.jsx'; // delete

FlowRouter.route('/example', { // delete
  action() {  // delete
    mount(ExampleApp, { // delete
      content: (<ExampleComponent />) // delete
    }) // delete
  }, // delete
}); // delete

FlowRouter.route('/example/page', { // delete
  action() { // delete
    mount(ExampleApp, { // delete
      content: (<AnonExampleComponent />) //delete
    }) // delete
  } // delete
}); // delete

/**
 * EXAMPLE APP. delete block
 */

// Root of the application...
FlowRouter.route("/", {
  action() {
    mount(MainApp, {      // loads the main app compoennt as a wrapper
        content: (<ExampleComponent />) // this is used as the content for the
    });                                 // wrapper.
  }
});
