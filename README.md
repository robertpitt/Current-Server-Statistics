# Current Server Statistics

## Meteor and NPM Packages Uses
 - Bootstrap
 - React
 - flowrouter
 - react-chartjs (npm package)
    - This requires a specific version of chartjs `1.1.1` - but all this
    information can be found at https://github.com/jhudson8/react-chartjs

## Custom package
At `packages/serverstats` is a custom package, All this packages does it run a
function every `1000ms`, gets the cpuInfo and avgLoad using NodeJS `os` module
from the machine and inserts it into a mongo collection `server_stats`.

`server_stats` collection is available as a global variable, (although I think
  the best way would be to just export the collection variable itself).
  publication and subscribe methods are provided for this collection with no
  restrictions.

## Build App
`meteor npm intall`

## Start App
`meteor`
