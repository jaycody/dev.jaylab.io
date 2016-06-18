countdown = function(){
  // setup conversions to make sense of the milliseconds data
  var milli   = 1;                // a milli is a single unit of our measure
  var second  = 1000  * milli;    // a second is 1000milliseconds
  var minute  = 60    * second;   // a minute is 60 seconds
  var hour    = 60    * minute;   // an hour is 60 minutes
  var day     = 24    * hour;     // a day is 24 hours
  
  calculate = function(){
    // get dates
    var now         = new Date();
    var releaseDate = new Date("July 20 2016 05:00:00 GMT-0700 (PDT)");
    var remaining   = new Date();
    
    var remainingMillis = releaseDate.getTime()-now.getTime();
    
    
    var remainingDays     = Math.floor(remainingMillis / day);
    var remainingHours    = Math.floor((remainingMillis % day)    / hour);
    var remainingMinutes  = Math.floor((remainingMillis % hour)   / minute);
    var remainingSeconds  = Math.floor((remainingMillis % minute) / second);
    var remainingMillis   = ((remainingMillis % second));
    
    //append each timeslot with 00, and remove the zeros if needed
    remainingDays  = ('00' + remainingDays).slice(-2);
    remainingHours    = ('00' + remainingHours).slice(-2);
    remainingMinutes  = ('00' + remainingMinutes).slice(-2);
    remainingSeconds  = ('00' + remainingSeconds).slice(-2);
    remainingMillis  = ('000' + remainingMillis).slice(-3);
    
    
    /*
    console.log('days     = ' + remainingDays     + '\n' +
                'hours    = ' + remainingHours    + '\n' + 
                'minutes  = ' + remainingMinutes  + '\n' + 
                'seconds  = ' + remainingSeconds  + '\n' + 
                'millis   = ' + remainingMillis   + '\n'
              );
    */
    // now
    
    //setInterval(calculate,1);
    
    var nowStr  = now.toDateString();
    //console.log('today: ' + nowStr);
    //var el_now = document.getElementById('now');
    //el_now.innerHTML = '<br>today: <br>' + nowStr;
    
    // release date
    //var releaseDateStr  = (releaseDate.toString()).slice(0,24);
    //var releaseDateStr  = releaseDate.toDateString();
    //console.log('releaseDate: ' + releaseDateStr);
    //var el_releaseDate = document.getElementById('releaseDate');
    //el_releaseDate.innerHTML = 'data viz release date: <br>' + releaseDateStr;
    
    // remaining
    //var el_days = document.getElementById('remaining');
    //el_days.innerHTML = 'Data Viz release countdown:';
    
    // remaining time
    var el_days  = document.getElementById('days');
    el_days.innerHTML = remainingDays;
    
    var el_days  = document.getElementById('hours');
    el_days.innerHTML = remainingHours;
    
    var el_days  = document.getElementById('minutes');
    el_days.innerHTML = remainingMinutes;
    
    var el_days  = document.getElementById('seconds');
    el_days.innerHTML = remainingSeconds;
    
    var el_days  = document.getElementById('millis');
    el_days.innerHTML = remainingMillis;
  };  
  
  setInterval(calculate,1);
  
}

