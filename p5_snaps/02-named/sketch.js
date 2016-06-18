var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;

var num_of_angels = 181; 
var angels        = [];
var randomPick;

var select        = false;

var pathPrefix      = "../../assets/numbered_angels/angel";



function setup() {
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
  
  for (var i = 0; i < num_of_angels; i++) {
    angels[i] = {
      img: loadImage(pathPrefix + i + ".jpg"),
      
      display: function() {
        image(this.img, 0,0, INNER_WIDTH, INNER_HEIGHT);
      }
    }
  }
}

function mousePressed(){
  select = !select;
}

function draw() {
  
  if (select){
    randomPick = floor(random(0,angels.length));
    angels[randomPick].display();
  }
  
  /*for (var i = 0; i < angels.length; i++) {
  }
  */
  //DEBUG();
}


function DEBUG(){
  console.log(randomPick);
}