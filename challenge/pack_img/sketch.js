var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;

var num_of_contributedImages  = 30; 
var contributedImages         = [];
var TOTAL_IMAGES_TO_DISPLAY     = 14;

var collaged                  = [];

var randomPick;
var randomOne;
var select    = true;

var maxWidthScale       = .4;
//var maxWidth            = 400;
var maxWidth            = INNER_WIDTH * maxWidthScale; //1/4 INNER_WIDTH

var dataPathPrefix      = "data/UT-";


var imageArray = [];
function preload() {
  for (var i = 0; i < num_of_contributedImages; i++) {
    imageArray[i] = loadImage(dataPathPrefix + i + ".jpg");
  }
}


function setup() {
  
  imageMode(CENTER);
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
  background(0);
  // create the image objects and push them into an array
  for (var i = 0; i < num_of_contributedImages; i++) {
    imageArray[i].loadPixels();
    contributedImages[i] = {
      img: imageArray[i],
      //sets the image size as a percentage of screen width
      maxWidthScale: .4,
      maxWidth:   INNER_WIDTH * maxWidthScale,
      originalWidth: 0,
      originalHeight: 0,
      originalAspectRatio: 0,
      widthScale:   0,
      heightScale:  0,
      adjustedWidth: 0,
      adjustedHeight: 0,
      
      display: function(x,y, _maxWidthScale) {
        //establishes image width as a ratio of screen width to mouseX
        this.maxWidthScale = _maxWidthScale;
        //this.maxWidthScale = map(mouseX, 0,width, 0,1);
        this.maxWidth =   INNER_WIDTH * this.maxWidthScale;
        // gets the orignal w, h and aspect ratio 
        this.originalWidth = this.img.width;
        this.originalHeight = this.img.height;
        this.originalAspectRatio = this.originalWidth/this.originalHeight;
        // calculates the new height as a function of maxWidth and orginal aspect ratio
        this.adjustedHeight = this.maxWidth/this.originalAspectRatio;
        //finds the scale needed to generate a specific image width
        this.widthScale = this.img.width/this.maxWidth;
        //calculate the new image width
        this.adjustedWidth = this.img.width/this.widthScale;
        //image(this.img, x, y, this.adjustedWidth, this.adjustedHeight);
        image(this.img, x, y, this.adjustedWidth, this.adjustedHeight);
        
      }
    }
    var isOverlapping = false;
    //console.log('made it');
    //start second loop and only add contributedImages to collaged [] that pass threshold
    for (var j = 0; j < collaged.length; j++){
      
      console.log('made it');
      
      }
    if(!isOverlapping){
      collaged.push(contributedImages[i]);
      }
    
    if (collaged.length >= TOTAL_IMAGES_TO_DISPLAY){
      break;
      }
    }
    
    
  drawCollage();
}



function draw() {
  // run the loop in draw
  //draw the TOTAL num of images to display 
  //console.log(contributedImages.length);
  /*
  if (select) {
    for (var i = 0; i < contributedImages.length; i++ ){
      var randomImage = floor(random(0, contributedImages.length));
      contributedImages[randomImage].display(random(width), random(height), random(.1,.4));
      }
    }
  */
  }

function drawCollage() {
  for (var i = 0; i < TOTAL_IMAGES_TO_DISPLAY; i++ ){
    contributedImages[i].display(random(width), random(height), random(.2,.5));
    //var randomImage = floor(random(0, contributedImages.length));
    //contributedImages[randomImage].display(random(width), random(height), random(.2,.5));
  }
}
  

function mousePressed(){
  background(0);
  select    = !select;

  drawCollage();
}
