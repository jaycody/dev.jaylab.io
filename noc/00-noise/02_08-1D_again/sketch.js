/*jstephens p5_gungfu 2016_06
perlin noise from shiffman
*/
var canvas;
var INNER_WIDTH = window.innerWidth;
var INNER_HEIGHT = window.innerHeight;
var xoff = 0;
var x;
var noiseX;
var increment;
var textLoc   = .6;
var textIncrement = .05;
var incrementSlider;

function setup(){
  //canvas = createCanvas(INNER_WIDTH, INNER_HEIGHT);
  createCanvas(INNER_WIDTH, INNER_HEIGHT);
  background(0);
  incrementSlider = createSlider(0, 5000, 1100);
  incrementSlider.position(width*.1, height*.1);
  incrementSlider.style('width', '500px');
  
}

function draw(){  
  increment = map(incrementSlider.value(), 0,5000, .000001, .04);
  calculateLocation();
  drawText();
  drawRect();
}

function drawRect(){
  fill(255);
  rect(x, INNER_HEIGHT*.5,15,15);
}

function calculateLocation(){
  noiseX = noise(xoff);
  x = noiseX * INNER_WIDTH;
  x = floor(x);
  xoff += increment;
}

function drawText(){
  textSize(18);
  fill(127)
  rect(0, INNER_HEIGHT*.60, width,165);  //background rect for movement info
  rect(0, INNER_HEIGHT*.16, width,30);  //background rect for slider
  fill(250);
  text("location.x=" + x, INNER_WIDTH*.1, INNER_HEIGHT*(textLoc + textIncrement*1));
  text("    where loc.x = noiseX * width", INNER_WIDTH*.1, INNER_HEIGHT*(textLoc + textIncrement*2));
  text("noiseX=" + noiseX, INNER_WIDTH*.1, INNER_HEIGHT*(textLoc + textIncrement*3));
  text("    where noiseX = noise(xoff)", INNER_WIDTH*.1, INNER_HEIGHT*(textLoc + textIncrement*4));
  text("    and xoff        = " + xoff, INNER_WIDTH*.1, INNER_HEIGHT*(textLoc + textIncrement*5));
  text("    and increment = " + increment, INNER_WIDTH*.1, INNER_HEIGHT*(textLoc + textIncrement*6));
  
  text("adjust noise space increment " + increment, INNER_WIDTH*.1, INNER_HEIGHT*.2);
}