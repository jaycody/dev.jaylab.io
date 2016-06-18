//constructor function
function Star(){
  this.initialLocation = createVector(random(-width*.5, width*.5), random(-height*.5, height*.5));
  //this.initialLocation = createVector();
  
  this.location = createVector(0,0);
  this.velocity = createVector(0,0);
  this.diameter = createVector(50,50);
  this.z_index  = random(width);

  this.speed    = 40;
  
  this.starImage = loadImage("../../assets/alphas/2011-5f-2nd_order-400x400.png");
  
  this.updateStar = function(){
    //this.speed = map(mouseX, 0, width, 0, 100);
    this.speed = sliderSpeed.value();
    
    if (this.speed >= 0){
      this.z_index -= this.speed;
      // if z_index < 1, then reset star at a new initial location
      if (this.z_index < 1){
        //new inital location
        this.z_index = random(width);
        //this.initialLocation.x = random(-100, 100);
        //this.initialLocation.y = random(-100,100);
        
        this.initialLocation.x = random(-width*.1,  width*.1);
        this.initialLocation.y = random(-width*.1,  width*.1);
        //this.initialLocation.y = random(-height*.1, height*.1);
      }
    }
    else {
      this.z_index -= this.speed;
      // if z_index < 1, then reset star at a new initial location
      if (this.z_index > width*1.2){
        //new inital location
        this.z_index = random(width);
        //this.initialLocation.x = random(-100, 100);
        //this.initialLocation.y = random(-100,100);
        
        this.initialLocation.x = random(-width*.5,  width*.5);
        this.initialLocation.y = random(-width*.5,  width*.5);
      }
    }
  };
  
  
  this.displayStar = function(){
    imageMode(CENTER);
    this.location.x = map(this.initialLocation.x/this.z_index,0,1,0,width);
    this.location.y = map(this.initialLocation.y/this.z_index,0,1,0,height);
    
    
    this.diameter.x = map(this.initialLocation.x/this.z_index,0,1,0,maxDiameterX.value());
    this.diameter.y = map(this.initialLocation.x/this.z_index,0,1,0,maxDiameterY.value());
    
    /*
    this.diameter.x = map(this.initialLocation.x/this.z_index,0,1,0,150);
    //this.diameter.y = map(this.initialLocation.y/this.z_index,0,1,0,150);
    this.diameter.y = this.diameter.x;
    */
    
    /* //DEBUG//
    console.log("initialLocation.x = " + this.initialLocation.x);
    console.log("location.x = " + this.location.x);
    console.log("z_index = "    + this.z_index);
    */
    
    
    var img = this.starImage;
    tint(255,150);                 // reduce opacity
    //imageMode(CENTER);
    //image(img, this.location.x, this.location.y, this.diameter.x, this.diameter.y);
    ellipse(this.location.x, this.location.y, this.diameter.x, this.diameter.y);
  };
  
  
  
  
}