# REDLEAP Boilerplate
This is used to start your apps quickly

Usefull packages already isntalled.
- Bootstrap
- font:awesome
- scss

## Contents
 - Build App
 - Start App
 - View example app

## Build App
`meteor npm intall`

## Start App
`meteor`

## View & Remove Example App
Go to /example or /examplepage
You will need to remove the example application.

 - client/routes.jsx
    - Delete every line marked delete
    - Import any of your components here, MainApp.jsx
    - Refactor the root route.

 - client/main.scss
    - Refactor to remove /example/scss/example.scss

 - server/main.js
    - Refactor to remove /imports/example/app/api/posts.js

Once you have done that you can remove imports/example, you are ready to start
your build.
