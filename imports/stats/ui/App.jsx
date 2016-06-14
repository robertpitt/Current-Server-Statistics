/**
 * @file
 *  - THis file contains the component that will wrap the whole
 *  application
 */
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// theses are the subcompoenents we are pulling in.
import Header from './components/header/Header.jsx';

// adding line chart
var LineChart = require("react-chartjs").Line;

//App component - reporesents the entire application from the top level
export default class App extends Component {

  /**
   * Helper method to loop through the stats that are coming in.
   *
   * @param  int core - What core do we want to find the stats
   * @return array    - containing the sys stats
   */
  getSysStats(core) {
    return this.props.stats.map((stat) => {
      return stat.cpuInfo[ core ].times.sys;
    });
  }

  /**
   * Helper method to loop through the stats and get user.
   *
   * @param  int core - What core do we want to find the stats
   * @return array    - Containing the user stats
   */
  getUsrStats(core) {
    return this.props.stats.map((stat) => {
      return stat.cpuInfo[ core ].times.user;
    });
  }

  /**
   * Helper method to get the load avg in an array for the chart to read.
   *
   * @return array    - Containing the loadAvg stats
   */
  getLoadStats() {
    return this.props.stats.map((stat) => {
      return stat.loadAvg;
    });
  }

  // todo function... just in case a machine has 20billion cores
  getNumberOfCores() {
    return 4; // hopefully you have atleast four cores :)
  }

  getCoreChartInfo(core, type) {

    // create a dynamic label
    var typeLabel = (type == 'sys') ? 'Sys' : 'User';

    return {
      labels: [
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
      ],
      datasets: [ {
        label: "Core " + core + " - " + typeLabel,
        responsive: true,
        fillColor: "rgba(0,20,220,0.5)",
        data: (type == 'sys') ? this.getSysStats( core ) : this.getUsrStats( core ),
      }]
    }

  }

  getChartOptions() {
    return  {
       responsive: true,
       showXAxisLabel: false,
       animation: false
    }
  }

  renderCoreCharts() {

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
          /*
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
          */
      ]
    }

    var coreInstance = [];
    var numberOfCores = this.getNumberOfCores();

    // this whole section could be made into a component.... it self
    for (var i = 0; i < numberOfCores; i++) {
      coreInstance.push(
        <div className="row">
          <div className="col-md-6">
            <LineChart data={this.getCoreChartInfo(i, 'sys')} options={this.getChartOptions()} redraw/>
          </div>
          <div className="col-md-6">
            <LineChart data={this.getCoreChartInfo(i, 'user')} options={this.getChartOptions()} redraw/>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        {coreInstance}
      </div>
    )
  }

  renderLoadChart() {

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

    return (
      <LineChart data={chartLoadData} options={this.getChartOptions()} redraw/>
    )
  }

  render() {
    return (
      <div className="container">
        <Header />

        <div className="container">

          <div className="row">
            <div className='col-md-8'>
              <h1>Cores</h1>

              <div className="row">
                { this.renderCoreCharts() }
              </div>

            </div>
            <div className="col-md-4">
              <h1>Avg Load</h1>
                { this.renderLoadChart() }
            </div>
          </div>

        </div>
      </div>
    )
  }
}

App.propTypes = {
  stats: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    stats: Stats.find({}, {sort: { createdAt: -1 }, skip: 0, limit: 45}).fetch()
  };
}, App);
