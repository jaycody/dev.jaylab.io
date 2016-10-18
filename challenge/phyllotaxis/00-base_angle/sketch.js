/* j.stephens 2016_08
code chanllenge with shiffman

phyllotatic spirals 

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
var leafHeight      = 10;
//var leavesPerCycle  = 200;
var divergenceAngle = 137.5;
var sizeScalar      = 6;
var fillGrey        = 255;



function setup(){
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
  background(0);
  angleMode(DEGREES);
  
  //initial phyllotaxy
  leaf            = 0;
  leafWidth       = random(1.5,20);
  leafHeight      = leafWidth;
  sizeScalar      = random(4,15);
  divergenceAngle = random(136.0,138.0);
}

function draw(){
  fill(fillGrey);
  var theta   = leaf * divergenceAngle;
  var radius  = sizeScalar * sqrt(leaf);
  
  var x = radius * cos(theta) + width/2;
  var y = radius * sin(theta) + height/2; 
  
  
  ellipse(x,y,leafWidth,leafHeight);
  displayParameters(theta, radius, x, y);
  
  leaf++;
}
function displayParameters(){
  var fontSize   = 18;
  var textWidth  = width*.1;
  var textHeight = height*.8;
  var heightPerLine = 30;
  textSize(fontSize);
  text("divergenceAngle = " + divergenceAngle, textWidth, 1*heightPerLine + textHeight);
  text("sizeScalar = " + sizeScalar,           textWidth, 2*heightPerLine + textHeight);
  text("leafSize = " +   leafWidth,            textWidth, 3*heightPerLine + textHeight);
}

function mousePressed(){
  background(0);
  leaf            = 0;
  leafWidth       = random(1.5,20);
  leafHeight      = leafWidth;
  sizeScalar      = random(4,15);
  divergenceAngle = random(136.0,138.0);
}