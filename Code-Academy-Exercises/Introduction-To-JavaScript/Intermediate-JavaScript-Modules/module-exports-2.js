let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

// How to wrap any collection of data and functions in an object, and export the object using module.exports