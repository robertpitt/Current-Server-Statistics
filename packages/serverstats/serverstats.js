/**
 * @file
 * [todo short desc]
 */

// imports
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

// require
var os = require('os');

// config
var interval = 1000;

// globals
var globals = this || window;
const Stats = new Mongo.Collection('server_stats');
globals.Stats = Stats;

if(Meteor.isServer){

  // lets publish everything don't see any reason to restrict
  Meteor.publish('server_stats', function(){
    return Stats.find();
  });

  // dump any prev data from the last build.....
  Meteor.startup(function(){
    console.log('Rebuilding Stats Collection');
    Stats.remove({});
  });

};

if(Meteor.isClient){
  Meteor.subscribe('server_stats');
};



/**
 * Helper function to get the load avg from the os module
 *
 * @param  int index
 *         [0]  for 1 min  AVG.
 *         [1]  for 5 min  AVG.
 *         [2]  for 15 min AVG.
 * @return float  - the value of the index in os.loadavg
 */
function getLoadAvg(index) {
  var loadAvg = os.loadavg();
  return loadAvg[index];
}


/**
 * Helper function to get the user and sys values from each CPU
 * loops though all the cores extracting the information we need.
 *
 * @return object - results we have found.
 */
function getCPUSInfo() {
  return os.cpus();   // I was planning on trimming the data...
}                     // but though against it



/**
 * Ran every second this will use the helper functions
 * to give a reading on the performance of the
 * machine and store in a collection
 *
 * @return void.
 */
function pollServerStat() {

  Stats.insert({
    loadAvg: getLoadAvg(0),
    cpuInfo: getCPUSInfo(),
    createdAt: new Date()
  });

}

// run a function within the meteor fibre.
if(Meteor.isServer){
  setInterval(Meteor.bindEnvironment(pollServerStat), interval);
}
