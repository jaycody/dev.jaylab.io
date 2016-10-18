/*jstephens p5_gungfu 2016_06
perlin noise from shiffman
TODO:
**simplest version possible that still does the following:
[] switch case function

[]  y = sin 
[]  y = additive sin+noise wave (sin dominant)
[]  y = additive sin+noise wave (noise dominant)

      //  inside shape, for every x in width {
      //    calculate y
      //    draw vertex (x,y);
      //  }
*/
var pathPrefix      = "/assets/img/lgo/OakMOMA.png";

var INNER_WIDTH = window.innerWidth;
var INNER_HEIGHT= window.innerHeight;
var staticBoxWidth       = INNER_WIDTH;   //200;
var staticBoxHeight      = INNER_HEIGHT;  //200;
var staticBoxInnerPartsWidth  = 30;
var staticBoxInnerPartsHeight = 30;
var fullScreenStaticIsON      = true;

var logoWidth = 600;
var logoHeight = 100;

var oakMomaLogo;

function setup(){
  createCanvas(INNER_WIDTH, INNER_HEIGHT);
  //oakMomaLogo  = loadImage(pathPrefix);
  //rectMode(CENTER);
  background(0);
  noStroke();
  
}

function draw(){
  
  /* //turn this extra stuff off to optimize
  if (!fullScreenStaticIsON){
    // push the matrix only if we must (iff the static is not full screen)
    push();
    if (mouseX == 0){
      translate(INNER_WIDTH/2-staticBoxWidth/2, INNER_HEIGHT/2-staticBoxHeight/2);
    } else {
      translate(mouseX-staticBoxWidth/2, mouseY-staticBoxHeight/2);
    }
  }
  */
  for (var x = 0; x < staticBoxWidth; x+=staticBoxInnerPartsWidth){
    for (var y = 0; y < staticBoxHeight; y+=staticBoxInnerPartsHeight){
    var static = color(floor(random(255)));
    //var static = color(127);
    //stroke(static);
    fill(static);
    rect(x,y,staticBoxInnerPartsWidth,staticBoxInnerPartsHeight);
    //point(x,y);
    }
  }
  
  /*
  // close the pushMatrix only when we have push to close
  if (!fullScreenStaticIsON){
    pop();
    }
  */
  
  //image(oakMomaLogo, 0,0,logoWidth, logoHeight);
  /*
  fill(255);
  textSize(45);
  text("Oakland Museum of Modern Art", width/10, height/3);
  textSize(25);
  text("leave your berkeley at the door", width/2, height/1.5);
  textSize(20);
  text("2017", width*.05, height*.95);
  */
}