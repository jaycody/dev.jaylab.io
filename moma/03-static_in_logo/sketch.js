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
var static;

var logoWidth = 600;
var logoHeight = 90;

var oakMomaLogo;

var subTitleXscl = 8;
var subTitleYscl = 15;

var dateXscl = 3;
var dateYscl = 20;

var logoTextXscl = 2;
var logoTextYscl = 5;
var backdropAlpha = 200;

function setup(){
  createCanvas(INNER_WIDTH, INNER_HEIGHT);
  oakMomaLogo  = loadImage(pathPrefix);
  background(0);
  noStroke();
  //rectMode(CENTER);
  
}

function draw(){
  for (var x = 0; x < staticBoxWidth; x+=staticBoxInnerPartsWidth){
    for (var y = 0; y < staticBoxHeight; y+=staticBoxInnerPartsHeight){
    static = color(floor(random(255)));
    fill(static);
    rect(x,y,staticBoxInnerPartsWidth,staticBoxInnerPartsHeight);
    }
  }
  /////////draw logo
  //image(oakMomaLogo, 30,30,logoWidth, logoHeight);
  //draw backdrop for logo
  fill(0,backdropAlpha);
  rect(staticBoxInnerPartsWidth*logoTextXscl,staticBoxInnerPartsHeight*(logoTextYscl-1),690, 60);
  textSize(46);
  fill(255);
  text("Oakland Museum of Modern Art", staticBoxInnerPartsWidth*(logoTextXscl+.57),staticBoxInnerPartsHeight*(logoTextYscl+.5));
  
  /////////SUBTITLE///////////////
  //draw subtitle backdrop
  fill(0,backdropAlpha);
  rect(staticBoxInnerPartsWidth*(subTitleXscl),staticBoxInnerPartsHeight*(subTitleYscl-1),480,60);
  //display subtitle
  textSize(33);
  fill(255);
  text("leave your berkeley at the door", staticBoxInnerPartsWidth*(subTitleXscl+.4), staticBoxInnerPartsHeight*(subTitleYscl+.4));
  
  ////////OPENING DATE/////////////
  //display backdrop for opening date
  fill(255);
  rect(staticBoxInnerPartsWidth*dateXscl,staticBoxInnerPartsHeight*(dateYscl),90,30);
  //display opening date
  textSize(30);
  fill(0);
  text("2017", staticBoxInnerPartsWidth*(dateXscl+.43), staticBoxInnerPartsHeight*(dateYscl+.87));
  
}