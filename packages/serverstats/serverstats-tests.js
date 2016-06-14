// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by serverstats.js.
import { name as packageName } from "meteor/serverstats";

// Write your tests here!
// Here is an example.
Tinytest.add('serverstats - example', function (test) {
  test.equal(packageName, "serverstats");
});
