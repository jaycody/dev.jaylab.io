var PAGE_TITLE = "noc_p5_gungfu-02_forces-02_03_history_fill";
/**jstephens 2016_04 - inspired by Nature of Code - shiffman**/
////////////
//SET GLOBALS
var INNER_WIDTH    = window.innerWidth;
var INNER_HEIGHT   = window.innerHeight;
var CANVAS;
var BGND_COLOR     = 127; // 127

var TOTAL_VEHICLES = 2;
var vehicles       = [];
var surface;

var surfaceIsOn    = false;
var backgroundIsOn = true;


function setup(){
  runBasicSetup(); 
  for (var i = 0; i < TOTAL_VEHICLES; i++){
    vehicles[i] = new Vehicle();
  }
  
  if (surfaceIsOn){
  surface = new Surface();
  }
}

function draw(){
  if (backgroundIsOn){
    displayPageTitle();
  }
  
  //establish drag and friction areas
  //surface.display();
  //external forces acting upon the vehicle
  var windForce = createVector(0,0);
  
  for (var i = 0; i < vehicles.length; i++){
    //apply external forces
    vehicles[i].applyForce(windForce);
    
    
    //check if vehicle is on a surface or in a fluid
    if (surfaceIsOn){
      if (surface.contains(vehicles[i])){
        surface.applyFrictionTo(vehicles[i]);
      }
    }
    
    //apply internal forces
    vehicles[i].perlinSteer();        ////steering force generated by vehicle
    
    //apply net force and update 
    vehicles[i].update();
    vehicles[i].display();
    vehicles[i].checkBoundary();  
  }

}

function mousePressed(){
  
}


////////////////////////////////////////////////////
////SETUP and CONFIG
////////////////////////////////////////////////////
function runBasicSetup() {
  CANVAS = createCanvas(INNER_WIDTH, INNER_HEIGHT);
  CANVAS.position(0,0);
  //smooth();
  displayPageTitle();
}

function displayPageTitle(){
  background(BGND_COLOR);      //clear CANVAS before draw
  fill(255);
  strokeWeight(0);
  textSize(18);
  text(PAGE_TITLE, width*.01, 40);
  
  //textSize(14);
  var LESSON = "\
  /*\n\
  //////CREATE TEXTURE FROM LOCATION HISTORY//////\n\
  //\n\
  //Use storeHistory showHistory boolean\n\
  ////add array to hold history\n\
  this.history = [];\n\
  ////create location vector at each round of animation and store in the array\n\
  var v = createVector(this.location.x, this.location.y);\n\
  this.history.push(v);\n\
  ////limit history\n\
  if (this.history.length > this.maxHistory){ \n\
    //remove 1 item from index 0 (the oldest member of the array)\n\
    this.history.splice(0,1);\n\
    }\n\
  */\n ";

  text(LESSON, width*.01, height*.6);
}
////END CONFIG
////////////////////////////////////////////////////






