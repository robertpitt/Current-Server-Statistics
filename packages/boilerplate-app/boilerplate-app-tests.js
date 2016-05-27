// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by boilerplate-app.js.
import { name as packageName } from "meteor/boilerplate-app";

// Write your tests here!
// Here is an example.
Tinytest.add('boilerplate-app - example', function (test) {
  test.equal(packageName, "boilerplate-app");
});
