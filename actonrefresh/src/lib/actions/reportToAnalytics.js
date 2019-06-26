'use strict';
var pagenavaa = require('../navcheck.js');
module.exports = function(settings) {
  // TODO Perform some action.
 
  var augmentTracker = turbine.getSharedModule('adobe-analytics', 'augment-tracker');
  var contextdataname = settings.cdname;
  if(pagenavaa == 'reload')
  augmentTracker(function(tracker) {
    // augment tracker in some way
    tracker = 'tracker.contextData['+contextdataname+']='+ 'refresh'
  });
  console.log(pagenavaa);
  console.log(tracker);
  return pagenavaa;
};
