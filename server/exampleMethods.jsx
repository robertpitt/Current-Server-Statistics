/**
 * This is an example method and publish of data
 */
/* remove comment

Meteor.methods({
  exampleMethodCall(example) {

    // example check function
    check(example, {
      name: String,
    });

    return clientInfo;
  },
});

// lets publish example documents
//
// you will need to subscribe to this data!!
//
//   Meteor.subscribe("example");
//
Meteor.publish('example', function () {
  // this limits published data to login
  if (this.userId != null) {
    var user = Meteor.users.find({ _id: this.userId }).fetch()[0];
    return ClientsMember.find({ teamId: user.teamId });
  }
});
 remove comment */
