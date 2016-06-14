/**
 * @file
 *  - THis file contains the component that will wrap the whole
 *  application
 */
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// theses are the subcompoenents we are pulling in.
import Header from './components/header/Header.jsx';

// adding line...
var LineChart = require("react-chartjs").Line;

//App component - reporesents the entire application from the top level
export default class App extends Component {

  getSysStats(core) {
    return this.props.stats.map((stat) => {
      return stat.cpuInfo[ core ].times.sys;
    });
  }

  getUsrStats(core) {
    return this.props.stats.map((stat) => {
      return stat.cpuInfo[ core ].times.user;
    });
  }

  getLoadStats(core) {
    return this.props.stats.map((stat) => {
      return stat.loadAvg;
    });
  }


  render() {

    var chartData = {
      labels: [
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
      ], // index
      datasets: [

          {
              label: "Core 1 - Sys",
              responsive: true,
              fillColor: "rgba(0,20,220,0.5)",
              data:  this.getSysStats(0),
              //data: [65, 59, 80, 81, 56, 55, 100, 65, 59, 80, 81, 56, 55, 100], // we create an value
          },
          {
              label: "Core 1 - User",
              responsive: true,
              fillColor: "rgba(0,220,220,0.5)",
              data:  this.getUsrStats(0),
              //data: [65, 59, 80, 81, 56, 55, 100, 65, 59, 80, 81, 56, 55, 100], // we create an value
          },


          {
              label: "Core 2 - Sys",
              responsive: true,
              fillColor: "rgba(0,20,220,0.5)",
              data:  this.getSysStats(1),
              //data: [15, 29, 90, 81, 16, 5, 0, 15, 29, 90, 81, 16, 5, 0], // we create an value
          },
          {
              label: "Core 2 - User",
              responsive: true,
              fillColor: "rgba(0,220,220,0.5)",
              data:  this.getUsrStats(1),
              //data: [15, 29, 90, 81, 16, 5, 0, 15, 29, 90, 81, 16, 5, 0], // we create an value
          },



          {
              label: "Core 3 - Sys",
              responsive: true,
              fillColor: "rgba(0,20,220,0.5)",
              data:  this.getSysStats(2),
              //data: [125, 109, 80, 81, 26, 95, 100, 125, 109, 80, 81, 26, 95, 100], // we create an value
          },
          {
              label: "Core 3 - User",
              responsive: true,
              fillColor: "rgba(0,220,220,0.5)",
              data:  this.getUsrStats(2),
              //data: [125, 109, 80, 81, 26, 95, 100, 125, 109, 80, 81, 26, 95, 100], // we create an value
          },


          {
              label: "Core 4 - Sys",
              responsive: true,
              fillColor: "rgba(0,20,220,0.5)",
              data:  this.getSysStats(3),
              //data: [25, 39, 40, 11, 26, 15, 10, 25, 19, 8, 8, 2, 5, 10], // we create an value
          },
          {
              label: "Core 4 - User",
              responsive: true,
              fillColor: "rgba(0,220,220,0.5)",
              data:  this.getUsrStats(3),
              //data: [25, 39, 40, 11, 26, 15, 10, 25, 19, 8, 8, 2, 5, 10], // we create an value
          },
      ]
    }

    // this will be the load data....
    var chartLoadData = {
      labels: [
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
      ], // index
      datasets: [

          {
              label: "Load Dataset",
              responsive: true,
              fillColor: "rgba(0,20,220,0.5)",
              data:  this.getLoadStats(),
              //data: [65, 59, 80, 81, 56, 55, 100, 65, 59, 80, 81, 56, 55, 100], // we create an value
          }
      ]
    }


    var chartOptions = {
       responsive: true,
       showXAxisLabel: false,
       animation: false
    }

    return (
      <div className="container">
        <Header />

        <div className="container">

          <div className="row">
            <div className='col-md-8'>
              <h1>Cores</h1>
              <LineChart data={chartData} options={chartOptions} redraw/>
            </div>
            <div className="col-md-4">
              <h1>Avg Load</h1>
              <LineChart data={chartLoadData} options={chartOptions} redraw/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

App.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    stats: Stats.find({}, {sort: { createdAt: -1 }, skip: 0, limit: 45}).fetch(),
  };
}, App);
