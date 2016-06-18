var PAGE_TITLE = "purple_rain";
/**jstephens 2016_04 - inspired by Prince and shiffman code challenge*
TODO:

*/
////////////
//SET GLOBALS
var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;
var CANVAS;
var BGND_COLOR    = 0;

var backgroundIsOn= true;

var d;
var drops         = [];
var TOTAL_DROPS   = 300;


function setup(){
  runBasicSetup(); 
  
  for (var i = 0; i < TOTAL_DROPS; i++){
    drops[i] = new Drop();
  }

  d = new Drop();
}


function draw(){
  if (backgroundIsOn){
    displayPageTitle();
  }
  
  for (var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].fall();
    drops[i].resetDrop();
  }
  
  d.show();
  d.fall();
}


function mousePressed(){

}


////////////////////////////////////////////////////
////SETUP and CONFIG
////////////////////////////////////////////////////
function runBasicSetup() {
  CANVAS = createCanvas(INNER_WIDTH, INNER_HEIGHT);
  CANVAS.position(0,0);
  smooth();
  displayPageTitle();
}

function displayPageTitle(){
  background(BGND_COLOR);      //clear CANVAS before draw
  //display PAGE_TITLE in CANVAS
  fill(160, 32, 240);
  strokeWeight(0);
  textSize(18);
  text(PAGE_TITLE, width*.01, 40);
}
////END CONFIG
////////////////////////////////////////////////////






