/* j.stephens 2016_08
code chanllenge with shiffman

phyllotatic spirals 
- built with forloops
- with rotating stem

theta   = n * 137.5   //where n is the leave number and 137.5 is divergence angle
radius  = c * sqrt(n) //c is size scalar and sqrt(n) of the distance based on which leave

polar to cartesian transformation
SOHCAHTOA
sin(theta) = opp/hyp = y/r
cos(theta) = adjacent/hyp = x/r

x = radius * cos(theta)
y = radius * sin(theta) 
*/
var INNER_WIDTH = window.innerWidth;
var INNER_HEIGHT= window.innerHeight;

var leaf            = 0;
var leafWidth       = 10;
var leafWidthMax    = 0;
var leafHeight      = 10;
var leavesPerCycle  = 600;
var divergenceAngle = 137.5;
var sizeScalar      = 15;
var initialScalar   = 0;
var fillGrey        = 255;
var fillStart       = 0;
var growthDirection = 1;
var fillChange      = .1;



function setup(){
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
  
  //initial phyllotaxy
  leaf            = 0;
  leafWidth       = random(5,40);
  leafWidthMax    = random(5,40);
  leafHeight      = leafWidth;
  sizeScalar      = random(10,25);
  initialScalar   = sizeScalar;
  divergenceAngle = random(130.0,135.0);
  logParameters();
}

function draw(){
  //fill(fillGrey);
  //background(0);
  
  for (var i = 0; i < leavesPerCycle; i++){
  //for (var i = leavesPerCycle; i > 0; i--){
    var theta   = leaf * divergenceAngle;
    var radius  = sizeScalar * sqrt(leaf);
    var x = radius * cos(theta) + width/2;
    var y = radius * sin(theta) + height/2; 
    
    fillGrey = map(radius,-width/9,width/2, fillStart, fillStart+255);
    var shrinkLeafWidth = map(i, 0, leavesPerCycle, leafWidth,leafWidthMax);
    //fillGrey
    //fill(255-fillGrey,fillGrey,fillGrey);
    fillGrey += fillChange;
    fill(fillGrey,255,255);
    //ellipse(x,y,leafWidth,leafHeight);
    ellipse(x,y,shrinkLeafWidth,shrinkLeafWidth);
  
    leaf++;
    divergenceAngle += .000004;
    sizeScalar -= (.00005 * growthDirection);
    
  }
  fillChange += .01;
  leaf = 0;
  //sizeScalar = 15;
  //divergenceAngle +=.01;
  if (abs(sizeScalar) > 1.5*initialScalar){
      growthDirection = growthDirection * -1;
  }
  //displayParameters(theta, radius, x, y);
  
}

function logParameters(){
  console.log("divergenceAngle = " + divergenceAngle + "  sizeScalar = " + sizeScalar + "   leafSize = " +   leafWidth);
}

function displayParameters(){
  var fontSize   = 18;
  var textWidth  = width*.1;
  var textHeight = height*.8;
  var heightPerLine = 30;
  fill(255);
  textSize(fontSize);
  text("divergenceAngle = " + divergenceAngle, textWidth, 1*heightPerLine + textHeight);
  text("sizeScalar = " + sizeScalar,           textWidth, 2*heightPerLine + textHeight);
  text("leafSize = " +   leafWidth,            textWidth, 3*heightPerLine + textHeight);
}

function mousePressed(){
  background(0);
  leaf            = 0;
  //var leavesPerCycle  = random(5,400);
  leavesPerCycle  = 600;
  leafWidth       = random(5,40);
  leafWidthMax    = random(5,40);
  leafHeight      = leafWidth;
  sizeScalar      = random(10,25);
  initialScalar   = sizeScalar;
  divergenceAngle = random(130.0,135.0);
  fillStart       = random(255);
  
  
  logParameters();
  
}