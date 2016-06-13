import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

var globals = this || window;

TestCol = new Meteor.Collection('test');
globals.TestCol = TestCol;

if(Meteor.isServer){
  Meteor.publish('test', function(){
    return TestCol.find();
  });

  Meteor.startup(function(){
    console.log('wtf');

    TestCol.remove({});
    TestCol.insert({test: 'a document'});
  });
};

if(Meteor.isClient){
  Meteor.subscribe('test');
};

var os = require('os');

var cpuStatInterval = setInterval(function(){ pollServerStat() }, 1000);

function pollServerStat() {
  //console.log(Stats);
  //console.log( os.cpus() );
  //console.log( os.loadavg() );
}

export const name = 'serverstats';
