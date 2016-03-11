# Meteor React Boilerplate

## Installing Meteor and Running

Install [Meteor](https://www.meteor.com/install) 1.2.1 here

`cd projectname && meteor` and then goto on [Localhost:3000](http://localhost:3000).

## Packages

### Removed
insecure & autopublish -
These packages allow for rapid development however we remove them because of security and performance reasons

### Added
jsx - Allows us to write in jsx


react-meteor-data

react-runtime@=0.14.3

react-template-helper@=0.2.4 -
These packages allow us to use react

kadira:flow-router

kadira:react-layout -
These packages allow use to use flow-route which allows us to route to specific
pages and react layout


fourseven:scss

reywood:bootstrap3-sass -
Allows us to write in scss and use bootstrap.

accounts-password -
This adds accounts to the meteor application

fortawesome:fontawesome -
We can now use fontawesome in our application

check -  !!IMPORTANT SECURITY!!
This is not part of the core for meteor, however to improve security and risk of
human error. You should always check you inputs for method callbacks.
See example in /server/exampleMethods.jsx
