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


var INNER_WIDTH = window.innerWidth;
var INNER_HEIGHT= window.innerHeight;

function setup(){
  createCanvas(INNER_WIDTH, INNER_HEIGHT);
  background(0);
}

function draw(){
  fill(255);
  textSize(45);
  text("Oakland Museum of Modern Art", width/10, height/3);
  textSize(25);
  text("leave your berkeley at the door", width/2, height/1.5);
  textSize(20);
  text("2017", width*.05, height*.95);
}