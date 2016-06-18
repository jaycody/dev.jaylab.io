var PAGE_TITLE = "p5_challenge-circle_packing";

/**jstephens 2016_06 - inspired by shiffman's code challenge**
TODO:
- [ ] check out 'code fights' online
*/
////////////
//SET GLOBALS
var TOTAL_ATTEMPTS = 300;
var TOTAL_CIRCLES  = 490;
var circles        = [];
var rInitial       = 90;
var fillAlpha      = 200;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noStroke();
  
  for (var i = 0; i < TOTAL_ATTEMPTS; i++){
    var circle = {
      x:  random(width),
      y:  random(height),
      r:  rInitial
    };
    var isOverlapping = false;
    
    
    //ONLY ADD CIRCLES THAT DO NOT OVERLAP
    //compare current circle to all previous using nested loop
    for (var j = 0; j < circles.length; j++){
      //does currrent circle overlap any previous circle
      //is distance between circles less than 2* their radius
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      //console.log('Dist between circle['+i+'] and circle[' + j + '] = ' + d);
      
      //CHECK FOR OVERLAP
      if (d < (circle.r + other.r)*1){
        //THEN THEY ARE OVERLAPPING
        //console.log('dist:' + d + ' is less than' + 2*circle.r);
        isOverlapping = true;
        break;
      }         
    }
    if(!isOverlapping){
      circles.push(circle);
    }
    //console.log("circles drawn: " + circles.length);
    if (circles.length >= TOTAL_CIRCLES){
      break;
    }
    // if we reached max attemtps and STILL can't find a place to draw, then subtract 1 from circle radius and start over
    if ((i >= TOTAL_ATTEMPTS-1) && (circles.length < TOTAL_CIRCLES)){
      //then shrink the circle radius by 1 and try it all over again
      //console.log('\nreducing radius by 1')
      rInitial --;
      i = 0;
    }
    // STOP BEFORE YOU GO SUBQUANTUM
    if (rInitial <= 5){
      break;
    }
  }
  
  //circles.push(circle);

  
  for (var i = circles.length-1; i >= 0; i--){
    var fillColor = map(circles[i].r, 1, 90, 255, 80);
    //var fillColor = map(i           , 0       , circles.length, 40, 255);
    fill(fillColor,fillAlpha);
    ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
  }
}


function draw(){
  
}