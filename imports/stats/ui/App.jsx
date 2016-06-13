/**
 * @file
 *  - THis file contains the component that will wrap the whole
 *  application
 */
import React, { Component, PropTypes } from 'react';

// theses are the subcompoenents we are pulling in.
import Header from './components/header/Header.jsx';

// adding line...
var LineChart = require("react-chartjs").Line;

//App component - reporesents the entire application from the top level
export default class App extends Component {
  render() {

    var chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"], // index
      datasets: [
          {
              label: "My First dataset",
              responsive: true,
              fillColor: "rgba(0,220,220,0.5)",
              data: [65, 59, 80, 81, 56, 55, 100], // we create an value
          }
      ]
    }

    var chartOptions = {
      title: {
           display: true,
           text: 'Custom Chart Title'
       },
       responsive: true
    }

    return (
      <div className="container">
        <Header />

        <div className="container">
          <LineChart data={chartData} options={chartOptions} />
        </div>
      </div>
    )
  }
}
