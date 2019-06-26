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
    return returnparam;
}
catch(err)
{
  return 'Not Supported'
}

}
