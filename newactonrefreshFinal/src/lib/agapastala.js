
var currentrefreshed = 0;
var globalfunctions = {

detect :function(){
    try{
  
        var perfEntries = performance.getEntriesByType("navigation");
        
        for (var i=0; i < perfEntries.length; i++) {
  
          var p = perfEntries[i];
          // dom Properties
  
            returnparam = p.type;
        }
  
        if(returnparam == "reload"){
          currentrefreshed = 1;
        }
        else
        currentrefreshed = 0;

    }
    catch(err)
    {
        //performance API not available use cookies
        var len = location.pathname.split('/').length;
        var lastpass = location.pathname.split('/')[len-1];
        var cook = require('@adobe/reactor-cookie');
        var cooke = cook.get('agapastala');
        if(cooke){
            if(lastpass == cooke )
            currentrefreshed = 1;

            else {
                currentrefreshed = 0;
                cook.set('agapastala',lastpass);
            }         
        }

        else
        {
            cook.set('agapastala',lastpass);
            currentrefreshed = 0;

        }




    }

},
    getValue:function(){
    return currentrefreshed;

},

}
module.exports = globalfunctions;

