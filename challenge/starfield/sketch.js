var PAGE_TITLE = "p5_challenge-starfield";

/**jstephens 2016_05 - inspired by shiffman's code challenge**
TODO:

*/
////////////
//SET GLOBALS
var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;
var CANVAS;
var BGND_COLOR    = 0;
var BGND_IS_ON    = true;

var star;
var TOTAL_STARS   = 10;
var stars         = [];
var forward       = true;

var sliderSpeed;
var translateX;
var translateY;


function setup(){

  runBasicSetup();  
  
  sliderSpeed = createSlider(-150, 150,   40);
  translateX  = createSlider(0, width, width*.5);
  translateY  = createSlider(0, height,height*.5);
  bgnd_slider = createSlider(0, 255,   55);
  maxDiameterX   = createSlider(10,500,   50);
  maxDiameterY   = createSlider(10,500,   50);
  
  
  sliderSpeed.position(width*.03,height*.09);
  translateX.position(width*.03, height*.19);
  translateY.position(width*.03, height*.29);
  bgnd_slider.position(width*.03, height*.39);
  maxDiameterX.position(width*.03, height*.49);
  maxDiameterY.position(width*.03, height*.59);
  
  for (var i = 0; i < TOTAL_STARS; i++){
    stars[i] = new Star();
  }
  //sliderSpeed = createSlider(0, 255, 20);
  //sliderSpeed.position = (width*.1,height*.1);
}

function draw(){
  //clear();
  displayPageTitle(BGND_IS_ON);
  
  BGND_COLOR = bgnd_slider.value();
  //display slider names and values
  fill(255-bgnd_slider.value())
  text("speed= " + sliderSpeed.value(), width*.03,height*.16);
  text("centerX= " + translateX.value() + "px", width*.03,height*.26);
  text("centerY= " + translateY.value() + "px", width*.03,height*.36);
  text("BGND_COLOR= " + bgnd_slider.value(), width*.03,height*.46);
  text("maxDiamaterX= " + maxDiameterX.value(), width*.03,height*.56);
  text("maxDiamaterY= " + maxDiameterY.value(), width*.03,height*.66);
  
  
  //translate(width/2, height/2);
  //translate(mouseX, mouseY);
  translate(translateX.value(), translateY.value());
  
  
  for (var i = 0; i < stars.length; i++){
    //stars[i].updateStar();
    stars[i].displayStar();
    stars[i].updateStar();
  }
  
  
  

  //fill(0,20);
  //rect(-width/2, -height/2, width, height);

}


function mousePressed(){
  forward = !forward
  
}

function keyPressed(){
}