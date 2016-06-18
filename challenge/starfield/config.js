////////////////////////////////////////////////////
////SETUP and CONFIG
////////////////////////////////////////////////////
function runBasicSetup() {
  CANVAS = createCanvas(INNER_WIDTH, INNER_HEIGHT);
  //CANVAS = createCanvas(600,600);
  //CANVAS.position(0,0);
  smooth();
  displayPageTitle(true);
}

function displayPageTitle(backgroundIsOn){
  if (backgroundIsOn){
    background(BGND_COLOR);
    
    //PAGE_TITLE in CANVAS
    fill(255);
    textSize(18);
    text(PAGE_TITLE, width*.01, 20);
    //LESSON
    var LESSON = "\
    /*\n\
    //////STARFIELD//////\n\
    */\n ";
    textSize(14);
    text(LESSON, width*.01, height*.8);
  }
}
////END CONFIG
////////////////////////////////////////////////////






