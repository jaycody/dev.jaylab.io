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

var borderXscl   = 1;
var borderYscl   = 22;

var subTitleXscl = 8;
var subTitleYscl = 15;

var dateXscl = 1;
var dateYscl = 21;

var logoTextXscl = 2;
var logoTextYscl = 5;
var backdropAlpha = 255;
var dateSpeed = .1;

function setup(){
  createCanvas(INNER_WIDTH, INNER_HEIGHT);
  oakMomaLogo  = loadImage(pathPrefix);
  background(0);
  //noStroke();
  //rectMode(CENTER);
  
}

function draw(){
noStroke();
  for (var x = 0; x < staticBoxWidth; x+=staticBoxInnerPartsWidth){
    for (var y = 0; y < staticBoxHeight; y+=staticBoxInnerPartsHeight){
    static = floor(random(255));
    //fill(static);
    if (static < 130){
      stroke(static);
      strokeWeight(1);
    } else {
      noStroke();
    }
    rect(x,y,staticBoxInnerPartsWidth,staticBoxInnerPartsHeight);
    }
  }
  pickBorder();
  noStroke();
  /////////display logo IMAGE
  image(oakMomaLogo, 30,30,logoWidth, logoHeight);
  
  /*///////display logo text
  //draw backdrop for logo
  fill(0,backdropAlpha);
  rect(staticBoxInnerPartsWidth*logoTextXscl,staticBoxInnerPartsHeight*(logoTextYscl-1),690, 60);
  textSize(46);
  fill(255);
  text("Oakland Museum of Modern Art", staticBoxInnerPartsWidth*(logoTextXscl+.57),staticBoxInnerPartsHeight*(logoTextYscl+.5));
  */
  
  
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
  fill(127);
  stroke(0);
  strokeWeight(1);
  rect(staticBoxInnerPartsWidth*dateXscl,staticBoxInnerPartsHeight*(dateYscl),90,30);
  noStroke();
  //display opening date
  textSize(30);
  fill(0);
  text("2017", staticBoxInnerPartsWidth*(dateXscl+.43), staticBoxInnerPartsHeight*(dateYscl+.87));
  
  /*
  dateYscl = dateYscl - dateSpeed;
  if (dateYscl < 4){
    dateSpeed *= -1;
  }
  
  if (dateYscl > 21){
    dateSpeed *= -1;
  }
  */
  
}

function pickBorder(){
  ///////////BORDER/////////////////
  var borderPicker = floor(random(6));
  var strokeColor  = floor(random(10));
  if (strokeColor == 0){
    stroke(255,0,0,100);
  } else if (strokeColor > 7){
    stroke(255,100);
  } else {
    noStroke();
  }
  //console.log(borderPicker);
  noFill();
  //fill(0,100);
  //fill(borderPicker*30,150);
  //stroke(255);
  //stroke(255,0,0,150);
  strokeWeight(4);
  // rectangular border - symmetrical
  switch(borderPicker){
    case 0:
      drawBorder1();
      break;
    case 1: 
      drawBorder2();
      break;
    case 2:
      drawBorder3();
      break;
    case 3:
      drawBorder4();
      break;
    case 4:
      drawBorder5();
      break;
    case 5:
      drawBorder6();
      break;
    default:
      //drawBorder6();
  }
}


function drawBorder1(){
  //stroke(255,0,0,150);
  //strokeWeight(2);
  beginShape();
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*borderXscl); vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*borderXscl);
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*borderYscl);
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl));
  endShape(CLOSE);
}

function drawBorder2(){
  //stroke(0,255,0,150);
  //strokeWeight(2);
  beginShape();
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*borderXscl); vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*borderXscl);
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl));
  endShape(CLOSE);
}

function drawBorder3(){
  //stroke(0,0,255,150);
  //strokeWeight(2);
  beginShape();
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*borderXscl); vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*borderXscl);
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsHeight*(borderXscl+3));
  vertex(staticBoxInnerPartsHeight*(borderXscl+3), staticBoxInnerPartsHeight*(borderXscl+3));
  //vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderYscl));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderYscl));
  vertex(staticBoxInnerPartsWidth*(borderXscl), staticBoxInnerPartsHeight*(borderYscl));
  endShape(CLOSE);
}

function drawBorder4(){
  //stroke(0,0,255,150);
  //strokeWeight(2);
  beginShape();
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*borderXscl); vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*borderXscl);
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl-1));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderYscl-1));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderXscl+3));
  vertex(staticBoxInnerPartsWidth*(borderXscl), staticBoxInnerPartsHeight*(borderXscl+3));
  endShape(CLOSE);
}


function drawBorder5(){
  //stroke(0,0,255,150);
  //strokeWeight(2);
  beginShape();
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*borderXscl); vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*borderXscl);
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderXscl+3));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderXscl+3));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl-1));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderYscl-1));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderXscl+3));
  vertex(staticBoxInnerPartsWidth*(borderXscl), staticBoxInnerPartsHeight*(borderXscl+3));
  endShape(CLOSE);
}

function drawBorder6(){
  //stroke(0,0,255,150);
  //strokeWeight(2);
  beginShape();
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*borderXscl); vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*borderXscl);
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderXscl+3));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderXscl+3));
  vertex(staticBoxInnerPartsHeight*(borderXscl+7), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-8));
  vertex(staticBoxInnerPartsHeight*(borderXscl+23), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl-6));
  vertex(staticBoxInnerPartsHeight*(borderXscl+20), staticBoxInnerPartsWidth*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl));
  vertex(staticBoxInnerPartsWidth*borderXscl, staticBoxInnerPartsHeight*(borderYscl-1));
  vertex(staticBoxInnerPartsWidth*(borderXscl+12), staticBoxInnerPartsHeight*(borderYscl-1));
  vertex(staticBoxInnerPartsWidth*(borderXscl+12), staticBoxInnerPartsHeight*(borderYscl-6));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderYscl-6));
  vertex(staticBoxInnerPartsWidth*(borderXscl+3), staticBoxInnerPartsHeight*(borderXscl+3));
  vertex(staticBoxInnerPartsWidth*(borderXscl), staticBoxInnerPartsHeight*(borderXscl+3));
  endShape(CLOSE);
}
  
  

