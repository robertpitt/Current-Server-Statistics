/**
 * @file
 *  - This file contains the component that will wrap the whole
 *  application
 */
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Header from './components/header/Header.jsx';

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

  /**
   * HELPER method, to get the chart information
   *
   * @param   int      core  index we want to get the information from.
   * @param   string   type  What information do we want to get.
   * @return  object  This  object will build the chart.
   */
  getCoreChartInfo(core, type) {

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
        fillColor: (type == 'sys') ? "rgba(0,20,220,0.5)" :  "rgba(0,200,220,0.5)",
        data: (type == 'sys') ? this.getSysStats( core ) : this.getUsrStats( core ),
      }]
    }
  }

  /**
   * HELPER method, for our chart status..
   *
   * @return object  that will help us define what features our chart have...
   */
  getChartOptions() {
    return  {
       responsive: true,
       showXAxisLabel: false,
       animation: false
    }
  }

  /**
   * HELPER function to display charts of the number of cores the machine has
   *
   * @return string  jsx component.
   */
  renderCoreCharts() {

    var coreInstance = [];
    var numberOfCores = this.getNumberOfCores();

    // this whole section could be made into a component.... it self
    for (var i = 0; i < numberOfCores; i++) {
      coreInstance.push(
        <div className="row">
          <h2> Core {i + 1} </h2>
          <div className="col-md-6">
            <h4>Sys</h4>

            <LineChart
              data={this.getCoreChartInfo(i, 'sys')}
              options={this.getChartOptions()}
              redraw
            />

          </div>
          <div className="col-md-6">
            <h4>User</h4>

            <LineChart
              data={this.getCoreChartInfo(i, 'user')}
              options={this.getChartOptions()}
              redraw
            />

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

  /**
   * HELPER method to render the chart load data
   *
   * @return string  jsx component.
   */
  renderLoadChart() {
    var chartLoadData = {
      labels: [
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "", "", "", "", "", "",
      ],
      datasets: [

          {
              label: "Load Dataset",
              responsive: true,
              fillColor: "rgba(0,90,20,0.5)",
              data:  this.getLoadStats(),
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

// set properties
export default createContainer(() => {
  return {
    // query the Stats collection for the 45 latests inserts..
    stats: Stats.find({}, {sort: { createdAt: -1 }, skip: 0, limit: 45}).fetch()
  };
}, App);
