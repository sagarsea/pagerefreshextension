'use strict';

module.exports = function(settings, trigger) {
  // TODO Start watching for an event. Call trigger when the event occurs.
  window.onload = function(){
    try{
        var perfEntries = performance.getEntriesByType("navigation");
        var returnparam = "";
        for (var i=0; i < perfEntries.length; i++) {
          console.log("= Navigation entry[" + i + "]");
          var p = perfEntries[i];
          // dom Properties
            console.log("DOM interactive = " + p.type);
            returnparam = p.type;
        }
        
    }
    catch(err)
    {
       returnparam = "Not Supported";
    }
    
    }
    
  if(returnparam == 'reload'){
    trigger;
  }
};
