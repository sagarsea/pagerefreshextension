'use strict';
var pagenavat = require('../navcheck.js');
module.exports = function(settings) {
  // TODO Perform some action.
  var de = settings.dataelement;
  if(pagenavat == 'reload'){
    
    de = 'page-refresh';
    return 'page-refresh';
  }
    
};
