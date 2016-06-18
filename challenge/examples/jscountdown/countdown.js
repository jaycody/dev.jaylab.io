var countdown = function(end, elements, callback){
  var _milli  = 1,
      _second = _milli   * 1000,
      _minute = _second  * 60,
      _hour   = _minute  * 60,
      _day    = _hour    * 24,
      
      end = new Date(end),  //?why is end var redefined here
      timer,
      
      calculate = function(){
        //check and compare against the current Date
        var now = new Date(),
            remaining = end.getTime() - now.getTime(),
            data;
        
        //check for valid Date
        if (isNaN(end)){
          console.log("Invalid date/time");    //
          return;                                //so nothing else will run
        }
        
        //determine if there's any time remaining on the counter
        if (remaining <= 0){
          clearInterval(timer);
          //check if callback is a function
          if (typeof callback === 'function'){
            callback();
            // to clear the millisecond field once countdown ends
            document.getElementById('millis').innerHTML = '0000';
            
          }
          //2.clear timer
        } else {
          if (!timer) {
            var interval = _milli; //_second
            timer = setInterval(calculate, interval);
          }
          
          data = {
            'days'    : Math.floor(remaining / _day),
            'hours'   : Math.floor((remaining % _day)     / _hour),
            'minutes' : Math.floor((remaining % _hour)    / _minute),
            'seconds' : Math.floor((remaining % _minute)  / _second),
            'millis'  : (remaining % _second) / _milli 
          }
        
          //check if elements are defined
          if (elements.length){
            for (index in elements){
              var timeID = elements[index];
              
              //keep the unit in double digits, such that 7 seconds is '07'
              if (timeID !== 'millis'){
                data[timeID] = ('00' + data[timeID]).slice(-2);      
              }
              document.getElementById(timeID).innerHTML = data[timeID];
            }
          }
        }
        //console.log(data);
        
      
      };
      
  calculate();
}