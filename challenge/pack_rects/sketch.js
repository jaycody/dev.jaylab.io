var PAGE_TITLE = "p5_challenge-rect_packing";

/**jstephens 2016_06 - inspired by shiffman's code challenge**
TODO:
- [ ] vary the width/height for rectangles
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

  //background(0,60);
  generateSquares();
}


function generateSquares() {
  //console.log(window.innerWidth);
  for (var i = 0; i < TOTAL_ATTEMPTS; i++){
    var circle = {
      
      //flip coin to determine is rect is portrait or landscape
      isPortrait: floor(random(2)),
      //change scale of width or height depending on coin flip
      wScl: 1,
      hScl: 1,
      
      //stops the initial wave of squares from all being the same size
      r:  random(rInitial*.5, rMax),
      
      w:  0,
      h:  0,
      x:  random(width),
      y:  random(height)
      
    };
    var isOverlapping = false;
    
    
    if (circle.isPortrait == 1){
      circle.wScl = 1.5;
    } else {
      circle.hScl = 1.5;
    }
    
    //set width and height to radius to make squares, or multiple w h by scale to change aspect ratio
    circle.w = circle.r * circle.wScl;
    circle.h = circle.r * circle.hScl;
    
    
    //caculate this here bc cant in the constructor function
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
      
      //CHECK FOR OVERLAP   //.9,1.2
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
  
    rect(circles[i].x, circles[i].y, circles[i].w*2, circles[i].h*2);
  }
}

