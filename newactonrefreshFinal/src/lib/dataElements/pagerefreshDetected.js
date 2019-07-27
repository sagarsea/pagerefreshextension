'use strict';

module.exports = function(settings) {
  // TODO Return the data element value.
  var valuecheck = require('../agapastala.js');
  valuecheck.detect();
  return valuecheck.getValue();
};
