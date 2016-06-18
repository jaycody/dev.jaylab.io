var PAGE_TITLE = "p5_challenge-square_packing";

/**jstephens 2016_06 - inspired by shiffman's code challenge**
TODO:
- [ ] check out 'code fights' online
*/
////////////
//SET GLOBALS
var TOTAL_ATTEMPTS = 300;
var TOTAL_CIRCLES  = 490;//490
var circles        = [];
var rInitial       = 100;
var rMax           = 200;
var rMin           = 15;
var fillAlpha      = 255;

function setup(){
  rectMode(CENTER);
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noStroke();
  
  generateSquares();
}
  
function draw(){
}

function mousePressed(){
  
  TOTAL_ATTEMPTS = 300;
  TOTAL_CIRCLES  = 490;//490
  circles        = [];
  rInitial       = 100;
  rMax           = 200;
  rMin           = 15;
  fillAlpha      = 255;

  background(0,60);
  generateSquares();
}


function generateSquares() {
  
  for (var i = 0; i < TOTAL_ATTEMPTS; i++){
    var circle = {
      
      r:  random(rInitial*.5, rMax),
      x:  random(width),
      y:  random(height)
      
    };
    var isOverlapping = false;
    
    circle.x = random(circle.r+10, width-(circle.r+10));
    circle.y = random(circle.r+10, height-(circle.r+10));
    
    //ONLY ADD CIRCLES THAT DO NOT OVERLAP
    //compare current circle to all previous using nested loop
    for (var j = 0; j < circles.length; j++){
      //does currrent circle overlap any previous circle
      //is distance between circles less than 2* their radius
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      //console.log('Dist between circle['+i+'] and circle[' + j + '] = ' + d);
      
      //CHECK FOR OVERLAP
      if (d < (circle.r + other.r)*random(.9,1.02)){
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
    // STOP AT MINIMUM IMAGE SIZE
    if (rInitial <= rMin){
      break;
    }
  }

  for (var i = circles.length-1; i >= 0; i--){
    var fillColor = map(circles[i].r, rMin, rMax*.7, 255,0);
    //var fillColor = map(i           , 0       , circles.length, 40, 255);
    fill(fillColor,fillAlpha);
    //ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
    rect(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
  }
}

