/**
 *  Routes file for the application
 */


// home route to render the Home component.
FlowRouter.route('/', {
  name: "Home",
  action(params) {
    ReactLayout.render(Home);
  }
});
