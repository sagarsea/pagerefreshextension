'use strict';

module.exports = function(settings) {
  // TODO Perform some action.
   var augmentTracker = turbine.getSharedModule('adobe-analytics', 'augment-tracker');
  var refresh = require('../agapastala.js');
  var refreshValue = refresh.getValue();
  var contextdataname = settings.cdname;
  if (augmentTracker){
  augmentTracker(function(tracker) {
    // augment tracker in some way
    tracker.contextData[contextdataname] = refreshValue;
  });
   
  }
};
